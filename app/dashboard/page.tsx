'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ChatBox from '@/components/ui/ChatBox';
import CalmButton from '@/components/ui/CalmButton';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/auth-helpers-nextjs';

export default function DashboardPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };
    
    getUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 pt-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">
        Welcome to Your Dashboard
      </h1>
      {user && (
        <p className="text-xl text-gray-200 drop-shadow mb-4">
          Hello, {user.email}! 👋
        </p>
      )}
      <p className="text-lg text-gray-200 drop-shadow">
        Access mood tracking, AI chat, and calming tools from the top menu.
      </p>

      {/* CalmButton now visible */}
      <div className="mt-8">
        <CalmButton />
      </div>

      {/* Sign out button for testing */}
      <button
        onClick={handleSignOut}
        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
      >
        Sign Out
      </button>

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