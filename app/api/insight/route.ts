import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Insight } from "@/models/Insight";

export async function POST(req: Request) {
  const { concern, text } = await req.json(); // ✅ match frontend

  const userPrompt = `The user is struggling with **${concern}**.\n\nThey said: "${text}".\n\nRespond with a calm, therapist-style insight that acknowledges their feeling and gives short, supportive advice.`;

  console.log("Prompt to n8n:", userPrompt);

  try {
    const res = await fetch("https://soultrack.app.n8n.cloud/webhook/mental-insight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userPrompt }), // ✅ pass actual prompt
    });

    const data = await res.json();

    console.log("Insight response from n8n:", data);

    // ✅ Save to MongoDB
    await connectToDatabase();
    await Insight.create({
      mood: concern,
      userInput: text,
      aiResponse: data.insight,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/insight:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
