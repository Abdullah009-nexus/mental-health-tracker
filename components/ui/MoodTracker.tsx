"use client";

import { useState, useEffect } from "react";
import { Frown, Meh, Smile, Laugh } from "lucide-react";

const moods = [
  { icon: <Frown size={28} />, label: "Sad" },
  { icon: <Meh size={28} />, label: "Neutral" },
  { icon: <Smile size={28} />, label: "Happy" },
  { icon: <Laugh size={28} />, label: "Excited" },
];

export function MoodTracker({ onMoodSelect }: { onMoodSelect?: (mood: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedMood = localStorage.getItem("mood-today");
    if (savedMood) {
      setSelected(savedMood);
      onMoodSelect?.(savedMood);
    }
  }, []);

  const handleSelect = (label: string) => {
    localStorage.setItem("mood-today", label);
    setSelected(label);
    setSaved(true);
    onMoodSelect?.(label);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">How are you feeling today?</h2>
      <div className="flex justify-around items-center gap-4">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => handleSelect(mood.label)}
            className={`flex flex-col items-center justify-center gap-1 p-3 rounded-lg transition hover:bg-blue-100 ${
              selected === mood.label ? "bg-blue-100 ring-2 ring-blue-400" : "bg-gray-50"
            }`}
          >
            {mood.icon}
            <span className="text-sm text-gray-700">{mood.label}</span>
          </button>
        ))}
      </div>
      {saved && <p className="mt-4 text-sm text-green-600">✅ Mood saved!</p>}
      {selected && !saved && (
        <p className="mt-4 text-sm text-gray-600">
          Current mood: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
}
