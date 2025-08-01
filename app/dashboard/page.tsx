'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatBox from '@/components/ui/ChatBox';
import CalmButton from '@/components/ui/CalmButton';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function DashboardPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('mock-user');
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 pt-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">
        Welcome to Your Dashboard
      </h1>
      <p className="text-lg text-gray-200 drop-shadow">
        Access mood tracking, AI chat, and calming tools from the top menu.
      </p>

      {/* CalmButton now visible */}
      <div className="mt-8">
        <CalmButton />
      </div>

      {/* Chat icon toggle */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <ChatBubbleIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Chat box */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 z-40 w-full max-w-xs">
          <ChatBox />
        </div>
      )}
    </div>
  );
}
