'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatBox from '@/components/ui/ChatBox';
import { MoodTracker } from '@/components/ui/MoodTracker';
import { CopingSuggestions } from '@/components/ui/CopingSuggestions';
import CalmButton from '@/components/ui/CalmButton';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function DashboardPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [issueTitle, setIssueTitle] = useState('');
  const [issueDetails, setIssueDetails] = useState('');
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('mock-user');
    router.push('/');
  };

  const handleIssueSubmit = () => {
    console.log('Submitted:', { issueTitle, issueDetails });
    setIssueTitle('');
    setIssueDetails('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/dash.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 min-h-screen px-4 md:px-8 py-6 space-y-6 pt-20">
        <div className="text-left mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-200 drop-shadow">
            Track your mood, get suggestions, and talk to your AI companion.
          </p>
        </div>

        <div className="rounded-2xl p-4 bg-transparent text-white">
          <MoodTracker onMoodSelect={setSelectedMood} />
        </div>

        <div className="rounded-2xl p-4 bg-transparent text-white">
          <CopingSuggestions mood={selectedMood} />
        </div>

        {/* --- Phase 1: Describe Your Problem Section --- */}
        <div className="flex justify-center items-center py-10">
          <div className="w-full max-w-md rounded-2xl p-6 bg-white bg-opacity-10 backdrop-blur-md text-white space-y-4 shadow-lg">
            <h2 className="text-2xl font-semibold text-center">Describe Your Issue</h2>

            <input
              type="text"
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
              placeholder="Enter illness or issue name (e.g., anxiety, sleep disorder)"
              className="w-full p-2 rounded-md bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none"
            />

            <textarea
              value={issueDetails}
              onChange={(e) => setIssueDetails(e.target.value)}
              placeholder="Briefly describe your symptoms or problem..."
              rows={4}
              className="w-full p-2 rounded-md bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none"
            />

            <button
              onClick={handleIssueSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Submit for Advice
            </button>
          </div>
        </div>

        {/* Calm breathing button (bottom-left) */}
        <div className="fixed bottom-4 left-4 z-50">
          <CalmButton />
        </div>

        {/* Chat Icon Toggle (bottom-right) */}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          >
            <ChatBubbleIcon className="w-6 h-6" />
          </button>
        </div>

        {/* ChatBox */}
        {chatOpen && (
          <div className="fixed bottom-20 right-4 z-40 w-full max-w-xs">
            <ChatBox />
          </div>
        )}
      </div>
    </div>
  );
}
