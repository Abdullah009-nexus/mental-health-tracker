"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ChatBox() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://soultrack.app.n8n.cloud/webhook-test/webhook-chat-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      const botMessage = { role: "bot", text: data.answer || "I didn't understand that." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", text: "❌ Error contacting AI." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl"
      >
        💬
      </button>

      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden z-50 border">
          <div className="bg-blue-600 text-white p-3 font-semibold">AI Companion</div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md text-sm ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right ml-auto max-w-[80%]"
                    : "bg-gray-200 text-left mr-auto max-w-[80%]"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-2 rounded-md text-sm bg-gray-100 text-left mr-auto max-w-[80%] animate-pulse">
                AI is typing...
              </div>
            )}
          </div>
          <div className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 text-sm border rounded-md"
              placeholder="Ask something..."
            />
            <button onClick={handleSend} className="ml-2 p-2 text-blue-600 hover:text-blue-800">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
