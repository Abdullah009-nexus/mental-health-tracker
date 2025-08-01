

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Insight } from "@/lib/models/Insight";


export async function GET() {
  try {
    await connectToDatabase();
    const insights = await Insight.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json(insights);
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
