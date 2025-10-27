import type { RequestHandler } from "express";
import { Router } from "express";
import { mysqlHealth, withMySQL } from "../mysql/client";

export const mysqlRouter = Router();

export const mysqlHealthRoute: RequestHandler = async (_req, res) => {
  const ok = await mysqlHealth();
  res.status(ok ? 200 : 500).json({ ok });
};

function splitSqlStatements(sql: string): string[] {
  const statements: string[] = [];
  let current = "";
  let inSingle = false, inDouble = false, inBacktick = false, inLineComment = false, inBlockComment = false;
  for (let i = 0; i < sql.length; i++) {
    const ch = sql[i];
    const next = sql[i + 1];

    if (inLineComment) {
      if (ch === "\n") inLineComment = false;
      current += ch;
      continue;
    }
    if (inBlockComment) {
      if (ch === "*" && next === "/") { inBlockComment = false; i++; current += "*/"; continue; }
      current += ch;
      continue;
    }

    if (!inSingle && !inDouble && !inBacktick) {
      if (ch === "-" && next === "-") { inLineComment = true; i++; current += "--"; continue; }
      if (ch === "#") { inLineComment = true; current += ch; continue; }
      if (ch === "/" && next === "*") { inBlockComment = true; i++; current += "/*"; continue; }
    }

    if (!inDouble && !inBacktick && ch === "'" && sql[i - 1] !== "\\") inSingle = !inSingle;
    else if (!inSingle && !inBacktick && ch === '"' && sql[i - 1] !== "\\") inDouble = !inDouble;
    else if (!inSingle && !inDouble && ch === "`" && sql[i - 1] !== "\\") inBacktick = !inBacktick;

    if (!inSingle && !inDouble && !inBacktick && ch === ";") {
      const s = current.trim();
      if (s) statements.push(s);
      current = "";
    } else {
      current += ch;
    }
  }
  const tail = current.trim();
  if (tail) statements.push(tail);
  return statements;
}

export const mysqlRunSql: RequestHandler = async (req, res) => {
  if (process.env.ALLOW_SQL_API !== "true") {
    return res.status(403).json({ error: "SQL API disabled. Set ALLOW_SQL_API=true to enable." });
  }
  const sql: unknown = req.body?.sql;
  if (typeof sql !== "string" || sql.trim().length === 0) {
    return res.status(400).json({ error: "Body must include non-empty 'sql' string." });
  }

  try {
    const result = await withMySQL(async (conn) => {
      await conn.beginTransaction();
      try {
        const stmts = splitSqlStatements(sql);
        let totalAffected = 0;
        for (const s of stmts) {
          const [r]: any = await conn.query(s);
          totalAffected += typeof r?.affectedRows === "number" ? r.affectedRows : 0;
        }
        await conn.commit();
        return { affectedRows: totalAffected, statements: stmts.length };
      } catch (e) {
        await conn.rollback();
        throw e;
      }
    });

    res.status(200).json({ success: true, ...result });
  } catch (err: any) {
    res.status(500).json({ error: err?.message ?? "Failed to execute SQL" });
  }
};

mysqlRouter.get("/health", mysqlHealthRoute);
mysqlRouter.post("/run-sql", mysqlRunSql);
