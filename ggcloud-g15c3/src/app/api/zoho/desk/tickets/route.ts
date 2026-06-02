import { NextResponse } from "next/server";
import { createDeskTicket } from "@/lib/zoho/desk";
import { jsonError } from "@/lib/zoho/request";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.subject || !body?.description) {
      return NextResponse.json(
        { error: "Subject and description are required." },
        { status: 400 }
      );
    }

    const result = await createDeskTicket({
      subject: body.subject,
      description: body.description,
      email: body.email,
      phone: body.phone,
      contactName: body.contactName,
      priority: body.priority,
      departmentId: body.departmentId,
    });

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(jsonError(error), { status: 500 });
  }
}
