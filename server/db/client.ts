import "dotenv/config";
import { Pool, PoolClient, QueryResult } from "pg";

let pool: Pool | null = null;

export function getPool(): Pool {
  if (pool) return pool;
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Please configure your database connection string.");
  }
  // Enable SSL for common hosted providers like Neon or Supabase when needed
  const ssl = connectionString.includes("neon.tech") || connectionString.includes("supabase.co")
    ? { rejectUnauthorized: false }
    : undefined;
  pool = new Pool({ connectionString, ssl });
  return pool;
}

export async function withClient<T>(fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const p = getPool();
  const client = await p.connect();
  try {
    return await fn(client);
  } finally {
    client.release();
  }
}

export async function query<T = any>(text: string, params?: any[]): Promise<QueryResult<T>> {
  const p = getPool();
  return p.query<T>(text, params);
}

export async function healthCheck(): Promise<boolean> {
  try {
    const res = await query<{ ok: number }>("select 1 as ok");
    return res.rows?.[0]?.ok === 1;
  } catch {
    return false;
  }
}
