import { readFile } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

// Serves the NoTrace Cloud single-page admin app (public/notrace-cloud.html)
// directly at the site root as a real HTML document, so its inline scripts
// (Firebase, Cloudinary, auth, etc.) execute exactly as authored.
export async function GET() {
  const filePath = path.join(process.cwd(), "public", "notrace-cloud.html")
  const html = await readFile(filePath, "utf-8")

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  })
}
