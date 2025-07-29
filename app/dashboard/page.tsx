"use client";

import { ChatBox } from "@/components/ui/ChatBox";
import { MoodTracker } from "@/components/ui/MoodTracker";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

      {/* Mood Tracker Component */}
      <MoodTracker />

      {/* AI Chat Widget */}
      <ChatBox />
    </div>
  );
}
