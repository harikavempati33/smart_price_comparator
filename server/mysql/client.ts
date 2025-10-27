import "dotenv/config";
import { createPool, Pool, PoolConnection, RowDataPacket, ResultSetHeader } from "mysql2/promise";

let pool: Pool | null = null;

function parseMySQLUrl(urlStr: string) {
  const u = new URL(urlStr);
  const host = u.hostname;
  const port = u.port ? Number(u.port) : 3306;
  const user = decodeURIComponent(u.username);
  const password = decodeURIComponent(u.password);
  const database = u.pathname.replace(/^\//, "");
  return { host, port, user, password, database };
}

export function getMySQLPool(): Pool {
  if (pool) return pool;
  const url = process.env.MYSQL_URL;
  const sslEnv = process.env.MYSQL_SSL === "true";
  const multipleStatements = true;

  if (!url) {
    const host = process.env.MYSQL_HOST;
    const user = process.env.MYSQL_USER;
    const password = process.env.MYSQL_PASSWORD;
    const database = process.env.MYSQL_DATABASE;
    const port = process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306;
    if (!host || !user || !database) {
      throw new Error("MySQL configuration missing. Provide MYSQL_URL or MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE.");
    }
    pool = createPool({ host, port, user, password, database, connectionLimit: 10, waitForConnections: true, multipleStatements, ssl: sslEnv ? { rejectUnauthorized: false } : undefined });
  } else {
    const cfg = parseMySQLUrl(url);
    pool = createPool({ ...cfg, connectionLimit: 10, waitForConnections: true, multipleStatements, ssl: sslEnv ? { rejectUnauthorized: false } : undefined });
  }
  return pool;
}

export async function withMySQL<T>(fn: (conn: PoolConnection) => Promise<T>): Promise<T> {
  const p = getMySQLPool();
  const conn = await p.getConnection();
  try {
    return await fn(conn);
  } finally {
    conn.release();
  }
}

export async function mysqlQuery<T extends RowDataPacket[] | ResultSetHeader = any>(sql: string, params?: any[]): Promise<T> {
  const p = getMySQLPool();
  const [rows] = await p.query<T>(sql, params);
  return rows;
}

export async function mysqlHealth(): Promise<boolean> {
  try {
    const rows = await mysqlQuery<RowDataPacket[]>("SELECT 1 AS ok");
    // @ts-ignore
    return Array.isArray(rows) && rows[0]?.ok === 1;
  } catch {
    return false;
  }
}
