import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const { searchParams } = new URL(request.url);
  const configuredSecret = process.env.ZOHO_WEBHOOK_SECRET;
  const receivedSecret =
    request.headers.get("x-zoho-webhook-secret") ??
    searchParams.get("secret");

  if (!configuredSecret) {
    return NextResponse.json(
      { error: "ZOHO webhook chua duoc cau hinh.", payload },
      { status: 501 }
    );
  }

  if (receivedSecret !== configuredSecret) {
    return NextResponse.json(
      { error: "ZOHO webhook secret khong hop le." },
      { status: 401 }
    );
  }

  return NextResponse.json({ ok: true, payload });
}
