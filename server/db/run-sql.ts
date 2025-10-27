#!/usr/bin/env tsx
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { withClient } from "./client";

async function executeFile(client: any, filePath: string) {
  const sql = fs.readFileSync(filePath, "utf8");
  if (!sql.trim()) return;
  await client.query("BEGIN");
  try {
    await client.query(sql);
    await client.query("COMMIT");
    console.log(`Executed: ${path.basename(filePath)}`);
  } catch (e: any) {
    await client.query("ROLLBACK");
    throw new Error(`${path.basename(filePath)} failed: ${e?.message ?? e}`);
  }
}

async function main() {
  const target = process.argv[2];
  if (!target) {
    console.error("Usage: pnpm db:exec <path-to-sql-file|directory>");
    process.exit(1);
  }
  const full = path.resolve(process.cwd(), target);
  const stat = fs.statSync(full);

  await withClient(async (client) => {
    if (stat.isDirectory()) {
      const files = fs
        .readdirSync(full)
        .filter((f) => f.toLowerCase().endsWith(".sql"))
        .sort();
      for (const f of files) {
        const p = path.join(full, f);
        await executeFile(client, p);
      }
    } else {
      await executeFile(client, full);
    }
  });
}

main();
