import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const openRouterApiKey = process.env.OPENROUTER_API_KEY;
    if (!openRouterApiKey) {
      throw new Error('Missing OpenRouter API Key');
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openRouterApiKey}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo', //  model
        messages: messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
      }),
    });

    const data = await response.json();

    const reply = data.choices?.[0]?.message || {
      role: 'assistant',
      content: 'I am here to support you. Please try again.',
    };

    return NextResponse.json({
      choices: [{ message: reply }],
    });
  } catch (error) {
    console.error('Error in OpenRouter API:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
