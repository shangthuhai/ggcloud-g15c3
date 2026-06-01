import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));

  if (!process.env.ZOHO_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "ZOHO webhook chua duoc cau hinh.", payload },
      { status: 501 }
    );
  }

  return NextResponse.json({ ok: true });
}
