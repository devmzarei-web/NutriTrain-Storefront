import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"
import { getCMSPayload, saveCMSPayload } from "@/lib/cms-store"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File | null
    const title = (formData.get("title") as string) || "Media Asset"
    const category = (formData.get("category") as string) || "GENERAL"

    if (!file) {
      return NextResponse.json({ error: "هیچ فایلی برای آپلود انتخاب نشده است." }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadsDir = path.join(process.cwd(), "public", "uploads")
    await mkdir(uploadsDir, { recursive: true })

    const ext = path.extname(file.name) || ".png"
    const safeName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}${ext}`
    const filePath = path.join(uploadsDir, safeName)

    await writeFile(filePath, buffer)
    const publicUrl = `/uploads/${safeName}`

    const cms = await getCMSPayload()
    const newAsset = {
      id: `${Date.now()}`,
      title: title || file.name,
      category,
      url: publicUrl,
      mimeType: file.type || "image/png",
      sizeBytes: file.size || 0,
      uploadedAt: new Date().toISOString(),
    }

    cms.assets = [newAsset, ...(cms.assets || [])]
    await saveCMSPayload(cms)

    return NextResponse.json({ success: true, url: publicUrl, asset: newAsset })
  } catch (err: any) {
    console.error("Upload error:", err)
    return NextResponse.json({ error: err.message || "خطا در آپلود تصویر" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const cms = await getCMSPayload()
    return NextResponse.json({ assets: cms.assets || [] })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
