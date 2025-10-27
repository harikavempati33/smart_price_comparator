import type { RequestHandler } from "express";
import { Router } from "express";
import { healthCheck, withClient } from "../db/client";

export const dbRouter = Router();

export const dbHealth: RequestHandler = async (_req, res) => {
  const ok = await healthCheck();
  res.status(ok ? 200 : 500).json({ ok });
};

export const runSql: RequestHandler = async (req, res) => {
  if (process.env.ALLOW_SQL_API !== "true") {
    return res.status(403).json({ error: "SQL API disabled. Set ALLOW_SQL_API=true to enable." });
  }
  const sql: unknown = req.body?.sql;
  if (typeof sql !== "string" || sql.trim().length === 0) {
    return res.status(400).json({ error: "Body must include non-empty 'sql' string." });
  }

  try {
    const result = await withClient(async (client) => {
      await client.query("BEGIN");
      try {
        const r = await client.query(sql);
        await client.query("COMMIT");
        return r;
      } catch (e) {
        await client.query("ROLLBACK");
        throw e;
      }
    });

    res.status(200).json({ success: true, rowCount: result.rowCount });
  } catch (err: any) {
    res.status(500).json({ error: err?.message ?? "Failed to execute SQL" });
  }
};

// mount
dbRouter.get("/health", dbHealth);
dbRouter.post("/run-sql", runSql);
