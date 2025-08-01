"use client";

import { useState } from "react";

export default function MentalIssuesForm() {
  const [text, setText] = useState("");
  const [insight, setInsight] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/insight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    if (Array.isArray(data) && data.length > 0) {
      setMood(data[0].mood);
      setInsight(data[0].insight);
    } else {
      setMood("Unknown");
      setInsight("No insight available.");
    }
  };

  return (
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
            className="w-full p-3 rounded-md bg-black/20 text-white backdrop-blur-md shadow-sm focus:outline-none"
          >
            <option>Anxiety</option>
            <option>Stress</option>
            <option>Depression</option>
            <option>Sleep Issues</option>
            <option>Other</option>
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
    </div>
  );
}
