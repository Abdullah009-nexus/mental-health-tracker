import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    // Log the incoming messages (optional)
    console.log("Received messages:", messages);

    const replyMessage = {
      role: 'assistant',
      content: 'Hi, I am your Soul Track Bot. How can I support you today?',
    };

    return NextResponse.json({
      choices: [{ message: replyMessage }],
    });
  } catch (error) {
    console.error('Error in Soul Track Bot API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
