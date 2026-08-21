import { NextResponse } from "next/server";
import { getPortfolioData, savePortfolioData } from "@/lib/data";
import { randomUUID } from "crypto";

export async function GET() {
  const data = await getPortfolioData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, payload } = body; // type: "project" | "experience"
    
    const data = await getPortfolioData();

    if (type === "project") {
      const newProject = { ...payload, id: randomUUID() };
      data.projects.push(newProject);
    } else if (type === "experience") {
      const newExp = { ...payload, id: randomUUID() };
      data.experiences.push(newExp);
    } else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    await savePortfolioData(data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add entry" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const type = searchParams.get("type"); // "project" | "experience"

    if (!id || !type) {
      return NextResponse.json({ error: "Missing id or type" }, { status: 400 });
    }

    const data = await getPortfolioData();

    if (type === "project") {
      data.projects = data.projects.filter(p => p.id !== id);
    } else if (type === "experience") {
      data.experiences = data.experiences.filter(e => e.id !== id);
    } else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    await savePortfolioData(data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete entry" }, { status: 500 });
  }
}
