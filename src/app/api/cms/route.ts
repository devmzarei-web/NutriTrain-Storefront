import { NextResponse } from "next/server"
import { getCMSPayload, saveCMSPayload } from "@/lib/cms-store"

export async function GET() {
  try {
    const data = await getCMSPayload()
    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const updated = await saveCMSPayload(body)
    return NextResponse.json({ success: true, data: updated })
  } catch (err: any) {
    console.error("CMS POST error:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
