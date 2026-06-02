import { NextResponse } from "next/server";
import { listInventoryItems } from "@/lib/zoho/inventory";
import { jsonError } from "@/lib/zoho/request";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const result = await listInventoryItems(
      searchParams.get("search") ?? undefined
    );

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(jsonError(error), { status: 500 });
  }
}
