// app/dashboard/moodtracker/page.tsx
'use client';

import { useState } from 'react';
import { MoodTracker } from '@/components/ui/MoodTracker';
import { CopingSuggestions } from '@/components/ui/CopingSuggestions';

export default function MoodTrackerPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white">
      <MoodTracker onMoodSelect={setSelectedMood} />
      <div className="mt-4 w-full max-w-xl">
        <CopingSuggestions mood={selectedMood} />
      </div>
    </div>
  );
}
