import fs from "node:fs"
import path from "node:path"
import { NextResponse } from "next/server"

export async function GET() {
    try {

        const publicPath = path.join(process.cwd(), 'public')
        const skillIconPath = path.join(publicPath, 'skill-icons')
        const skillIcons = fs.readdirSync(skillIconPath).map(file => {
            return {
                fileName: file
            }
        })
        return NextResponse.json({ data: skillIcons })
    } catch (error) {
        console.error('GET /api/file', error)
        return NextResponse.json({ error: 'Failed to get file' }, { status: 500 })
    }
}
