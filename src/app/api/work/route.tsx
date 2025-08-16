import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const storePath = path.join(process.cwd(), "/src/store");
    const workJsonDataPath = path.join(storePath, "work.json");
    const workJsonData = fs.readFileSync(workJsonDataPath, "utf-8");
    const work = JSON.parse(workJsonData);
    return NextResponse.json({ data: work }, { status: 200 });
  } catch (error) {
    console.error("GET /api/file", error);
    return NextResponse.json(
      {
        error: "Failed to read skills data",
      },
      { status: 500 },
    );
  }
}
