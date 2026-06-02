import { NextResponse } from "next/server";
import { createZohoInvoice } from "@/lib/zoho/invoice";
import { jsonError } from "@/lib/zoho/request";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.customerId || !Array.isArray(body?.lineItems)) {
      return NextResponse.json(
        { error: "customerId and lineItems are required." },
        { status: 400 }
      );
    }

    const result = await createZohoInvoice({
      customerId: body.customerId,
      referenceNumber: body.referenceNumber,
      lineItems: body.lineItems,
    });

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(jsonError(error), { status: 500 });
  }
}
