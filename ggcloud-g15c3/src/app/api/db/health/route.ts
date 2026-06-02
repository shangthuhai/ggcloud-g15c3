import { NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2";
import { dbQuery } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type HealthRow = RowDataPacket & {
  ok: number;
  databaseName: string;
  serverTime: string;
};

export async function GET() {
  try {
    const rows = await dbQuery<HealthRow[]>(
      "SELECT 1 AS ok, DATABASE() AS databaseName, NOW() AS serverTime"
    );

    return NextResponse.json({
      ok: true,
      database: rows[0]?.databaseName,
      serverTime: rows[0]?.serverTime,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown database error",
      },
      { status: 500 }
    );
  }
}
