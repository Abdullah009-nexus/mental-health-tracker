"use client";

import { useState } from "react";
import ChatBox from "@/components/ui/ChatBox";
import CalmButton from "@/components/ui/CalmButton";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function MentalIssuesForm() {
  const [text, setText] = useState("");
  const [concern, setConcern] = useState("Anxiety");
  const [insight, setInsight] = useState("");
  const [mood, setMood] = useState("");
  const [chatOpen, setChatOpen] = useState(false); //  for toggling chat

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/insight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, concern }),
      });

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setMood(data[0].mood || "Unknown");
        setInsight(data[0].insight || "No insight available.");
      } else {
        setMood("Unknown");
        setInsight("No insight available.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMood("Error");
      setInsight("There was an issue fetching insight.");
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-12">
      <div className="w-full max-w-4xl mx-auto p-8 rounded-xl shadow-lg bg-transparent">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Get a Therapist’s Insight
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="concern" className="block text-white font-medium mb-2">
              Select Your Concern
            </label>
            <select
              id="concern"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full p-3 rounded-md bg-black/20 text-white backdrop-blur-md shadow-sm focus:outline-none"
            >
              <option value="Anxiety">Anxiety</option>
              <option value="Stress">Stress</option>
              <option value="Depression">Depression</option>
              <option value="Sleep Issues">Sleep Issues</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="text" className="block text-white font-medium mb-2">
              Briefly Describe How You're Feeling
            </label>
            <textarea
              id="text"
              rows={4}
              placeholder="Write 1–3 lines about what's bothering you..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-4 rounded-md bg-black/20 text-white placeholder-white/70 backdrop-blur-md shadow-sm resize-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Get Insight
          </button>
        </form>

        {insight && (
          <div className="mt-8 p-6 rounded-lg bg-black/30 text-white backdrop-blur-md shadow-md">
            <h3 className="font-semibold mb-2">Mood: {mood}</h3>
            <p>{insight}</p>
          </div>
        )}

        {/* Calm Button Below */}
        <div className="mt-10 text-center">
          <CalmButton />
        </div>
      </div>

      {/* Chat Icon Toggle */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <ChatBubbleIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Box */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 z-40 w-full max-w-xs">
          <ChatBox />
        </div>
      )}
    </div>
  );
}
