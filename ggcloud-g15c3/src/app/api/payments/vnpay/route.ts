import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));

  if (!process.env.VNPAY_TMN_CODE || !process.env.VNPAY_HASH_SECRET) {
    return NextResponse.json(
      { error: "VNPAY sandbox chua duoc cau hinh.", payload },
      { status: 501 }
    );
  }

  return NextResponse.json(
    { error: "Can bo sung luong ky va redirect VNPAY sandbox.", payload },
    { status: 501 }
  );
}
