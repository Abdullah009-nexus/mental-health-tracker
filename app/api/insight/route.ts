import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();
  console.log("User input:", text);

  try {
    const res = await fetch("https://soultrack.app.n8n.cloud/webhook-test/mental-insight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    console.log("Insight response from n8n:", data);

    // Return full array directly
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/insight:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
