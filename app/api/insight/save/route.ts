
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Insight } from "@/lib/models/Insight";

export async function POST(req: Request) {
  const { mood, userInput, insight } = await req.json();

  try {
    await connectToDatabase();

    const newInsight = new Insight({
      mood,
      userInput,
      insight,
      createdAt: new Date(),
    });

    const result = await newInsight.save();

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("Mongo Save Error:", error);
    return NextResponse.json({ error: "Failed to save insight." }, { status: 500 });
  }
}
