// app/api/ask/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Send request to n8n webhook (adjust this URL if deployed)
    const res = await fetch('http://localhost:5678/webhook-test/ai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: message }),
    });

    const data = await res.json();
    return NextResponse.json({ text: data.text || "No response from AI" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ text: "Error contacting AI." }, { status: 500 });
  }
}
