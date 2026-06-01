import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));

  if (!process.env.MOMO_PARTNER_CODE || !process.env.MOMO_SECRET_KEY) {
    return NextResponse.json(
      { error: "MoMo sandbox chua duoc cau hinh.", payload },
      { status: 501 }
    );
  }

  return NextResponse.json(
    { error: "Can bo sung luong ky va redirect MoMo sandbox.", payload },
    { status: 501 }
  );
}
