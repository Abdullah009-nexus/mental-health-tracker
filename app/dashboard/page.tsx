'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatBox from '@/components/ui/ChatBox';
import { MoodTracker } from '@/components/ui/MoodTracker';
import { CopingSuggestions } from '@/components/ui/CopingSuggestions';
import CalmButton from '@/components/ui/CalmButton';

export default function DashboardPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('mock-user');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 space-y-8 relative">
      {/* Header + Sign Out */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600">
            Track your mood, get suggestions, and talk to your AI companion.
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Sign Out
        </button>
      </div>

      {/* Mood Tracker */}
      <div className="bg-white rounded-2xl shadow p-4">
        <MoodTracker onMoodSelect={setSelectedMood} />
      </div>

      {/* Coping Suggestions */}
      <div className="bg-white rounded-2xl shadow p-4">
        <CopingSuggestions mood={selectedMood} />
      </div>

      {/* Calm Button on Left Side */}
      <div className="fixed bottom-4 left-4 z-50">
        <CalmButton />
      </div>

      {/* AI Chat Box on Right Side */}
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs">
        <ChatBox />
      </div>
    </div>
  );
}
