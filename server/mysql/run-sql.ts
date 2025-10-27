#!/usr/bin/env tsx
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { withMySQL } from "./client";

function splitSqlStatements(sql: string): string[] {
  const statements: string[] = [];
  let current = "";
  let inSingle = false, inDouble = false, inBacktick = false, inLineComment = false, inBlockComment = false;
  for (let i = 0; i < sql.length; i++) {
    const ch = sql[i];
    const next = sql[i + 1];

    if (inLineComment) { if (ch === "\n") inLineComment = false; current += ch; continue; }
    if (inBlockComment) { if (ch === "*" && next === "/") { inBlockComment = false; i++; current += "*/"; continue; } current += ch; continue; }

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

async function executeFile(filePath: string) {
  const sql = fs.readFileSync(filePath, "utf8");
  const stmts = splitSqlStatements(sql);
  await withMySQL(async (conn) => {
    await conn.beginTransaction();
    try {
      for (const s of stmts) {
        await conn.query(s);
      }
      await conn.commit();
      console.log(`Executed: ${path.basename(filePath)} (${stmts.length} statements)`);
    } catch (e: any) {
      await conn.rollback();
      console.error(`${path.basename(filePath)} failed: ${e?.message ?? e}`);
      process.exit(1);
    }
  });
}

async function main() {
  const target = process.argv[2];
  if (!target) {
    console.error("Usage: pnpm mysql:exec <path-to-sql-file|directory>");
    process.exit(1);
  }
  const full = path.resolve(process.cwd(), target);
  const stat = fs.statSync(full);

  if (stat.isDirectory()) {
    const files = fs.readdirSync(full).filter((f) => f.toLowerCase().endsWith(".sql")).sort();
    for (const f of files) await executeFile(path.join(full, f));
  } else {
    await executeFile(full);
  }
}

main();
