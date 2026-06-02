import { NextResponse } from "next/server";
import { subscribeToCampaignsList } from "@/lib/zoho/campaigns";
import { jsonError } from "@/lib/zoho/request";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const result = await subscribeToCampaignsList({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
    });

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(jsonError(error), { status: 500 });
  }
}
