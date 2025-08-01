import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { concern, description } = await req.json();

  const userPrompt = `The user is struggling with **${concern}**.\n\nThey said: "${description}".\n\nRespond with a calm, therapist-style insight that acknowledges their feeling and gives short, supportive advice.`;

  console.log("Prompt to n8n:", userPrompt);

  try {
    const res = await fetch("https://soultrack.app.n8n.cloud/webhook-test/mental-insight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userPrompt }),
    });

    const data = await res.json();

    console.log("Insight response from n8n:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/insight:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
