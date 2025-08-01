'use client';

import { useState } from 'react';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { ChatBox } from '@/components/ui/ChatBox';
import CalmButton from '@/components/ui/CalmButton'; // ✅ still included

const moods = ['Happy', 'Sad', 'Anxious', 'Excited', 'Angry', 'Calm'];

export function MoodTracker({ onMoodSelect }: { onMoodSelect: (mood: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);

  const handleSelect = (mood: string) => {
    setSelected(mood);
    onMoodSelect(mood);
  };

  return (
    <div className="relative flex flex-col items-center space-y-4 w-full">
      <div className="backdrop-blur-sm bg-white/5 shadow-md rounded-2xl p-3 text-center space-y-1">
        <h2 className="text-xl font-semibold text-white">How are you feeling today?</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => handleSelect(mood)}
              className={`px-4 py-2 rounded-full text-white transition-all ${
                selected === mood ? 'bg-blue-600' : 'bg-transparent hover:bg-white/10'
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ CalmButton shown below, as intended */}
      <div className="mt-6">
        <CalmButton />
      </div>

      {/* ✅ Floating chat icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <ChatBubbleIcon className="w-6 h-6" />
        </button>
      </div>

      {/* ✅ ChatBox shows when toggled */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 z-40 w-full max-w-xs">
          <ChatBox />
        </div>
      )}
    </div>
  );
}
