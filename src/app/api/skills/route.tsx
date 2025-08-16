import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const storePath = path.join(process.cwd(), "/src/store");
    const skillsJsonDataPath = path.join(storePath, "skills.json");
    const skillsJsonData = fs.readFileSync(skillsJsonDataPath, "utf-8");
    const skills = JSON.parse(skillsJsonData);
    return NextResponse.json({ data: skills }, { status: 200 });
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
