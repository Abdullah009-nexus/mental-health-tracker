// components/ui/MoodTracker.tsx
'use client';

// Mood Tracker UI to let users select how they feel
import { useState } from 'react';

const moods = ['Happy', 'Sad', 'Anxious', 'Excited', 'Angry', 'Calm'];

export function MoodTracker({ onMoodSelect }: { onMoodSelect: (mood: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (mood: string) => {
    setSelected(mood);
    onMoodSelect(mood);
  };

  return (
    <div className="flex justify-center">
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
    </div>
  );
}
