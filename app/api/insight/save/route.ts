import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const { mood, userInput, insight } = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db("soultrack");
    const collection = db.collection("insights");

    const result = await collection.insertOne({
      mood,
      userInput,
      insight,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Mongo Save Error:", error);
    return NextResponse.json({ error: "Failed to save insight." }, { status: 500 });
  }
}
