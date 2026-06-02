import { NextResponse } from "next/server";
import { uploadToWorkDrive } from "@/lib/zoho/workdrive";
import { jsonError } from "@/lib/zoho/request";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const parentId = formData.get("parentId");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const result = await uploadToWorkDrive(
      file,
      typeof parentId === "string" ? parentId : undefined
    );

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(jsonError(error), { status: 500 });
  }
}
