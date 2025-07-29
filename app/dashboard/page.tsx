'use client';

import { useState } from 'react';
import ChatBox from '@/components/ui/ChatBox'; 
import { MoodTracker } from '@/components/ui/MoodTracker';
import { CopingSuggestions } from '@/components/ui/CopingSuggestions';
import CalmButton from "@/components/ui/CalmButton";


export default function DashboardPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          Track your mood, get suggestions, and talk to your AI companion.
        </p>
      </div>

      {/* Mood Tracker */}
      <div className="bg-white rounded-2xl shadow p-4">
        <MoodTracker onMoodSelect={setSelectedMood} />
      </div>

      {/* Coping Suggestions */}
      <div className="bg-white rounded-2xl shadow p-4">
        <CopingSuggestions mood={selectedMood} />
      </div>

      
      {/*Button*/}
      <div className="relative min-h-screen bg-white">
      <CalmButton />
    </div>

      {/* AI Chat Box */}
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs">
        <ChatBox />
      </div>
    </div>
  );
}
