'use client';

import { useState } from 'react';
import { SendHorizonal } from 'lucide-react';

export default function ChatBox() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! How can I help you today?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      console.log('Response status:', res.status);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('API Response:', data);
      
      const reply = data.choices?.[0]?.message?.content || data.message || 'Hi, I am your Soul Track Bot. How can I support you today?';

      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: `Error: ${err instanceof Error ? err.message : 'Could not connect to AI'}. Please check the console for more details.` 
      }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm bg-white border border-gray-200 shadow-xl rounded-2xl flex flex-col overflow-hidden z-50">
      <div className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600">
        Soul Track Bot
      </div>

      <div className="flex-1 max-h-96 overflow-y-auto px-4 py-2 space-y-2 text-sm bg-white">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-[80%] whitespace-pre-wrap ${
              msg.role === 'user'
                ? 'ml-auto bg-blue-500 text-white text-right'
                : 'mr-auto bg-indigo-100 text-gray-900'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-gray-400 italic">Typing...</div>}
      </div>

      <div className="flex items-center border-t px-2 py-1 bg-gray-50">
        <input
          className="flex-1 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none bg-white rounded-md"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="p-2 hover:text-indigo-600 disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading}
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}
