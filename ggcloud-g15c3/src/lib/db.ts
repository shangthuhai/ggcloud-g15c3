import { readFileSync } from "fs";
import mysql, {
  type Pool,
  type PoolOptions,
  type ResultSetHeader,
  type RowDataPacket,
} from "mysql2/promise";

let pool: Pool | undefined;

type DbValue = string | number | boolean | Date | Buffer | null;

function requireDbEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required database environment variable: ${name}`);
  }

  return value;
}

function getSocketPath() {
  if (process.env.DB_SOCKET_PATH) {
    return process.env.DB_SOCKET_PATH;
  }

  if (process.env.CLOUD_SQL_CONNECTION_NAME) {
    return `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`;
  }

  return undefined;
}

function isEnabled(value: string | undefined) {
  return value === "1" || value === "true" || value === "yes";
}

function getSslOptions(): PoolOptions["ssl"] | undefined {
  if (!isEnabled(process.env.DB_SSL)) {
    return undefined;
  }

  const caPath = process.env.DB_SSL_CA_PATH;

  return {
    ca: caPath ? readFileSync(caPath, "utf8") : undefined,
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false",
  };
}

function getPoolOptions(): PoolOptions {
  const socketPath = getSocketPath();
  const baseOptions: PoolOptions = {
    user: requireDbEnv("DB_USER"),
    password: requireDbEnv("DB_PASSWORD"),
    database: requireDbEnv("DB_NAME"),
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT ?? 5),
  };

  if (socketPath) {
    return {
      ...baseOptions,
      socketPath,
    };
  }

  return {
    ...baseOptions,
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: Number(process.env.DB_PORT ?? 3306),
    ssl: getSslOptions(),
  };
}

export function getDbPool() {
  if (!pool) {
    pool = mysql.createPool(getPoolOptions());
  }

  return pool;
}

export async function dbQuery<T extends RowDataPacket[] | ResultSetHeader>(
  sql: string,
  values?: DbValue[]
) {
  const [result] = await getDbPool().execute<T>(sql, values);

  return result;
}
