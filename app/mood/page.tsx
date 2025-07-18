"use client";
import { useState } from "react";

export default function MoodPage() {
  const [mood, setMood] = useState("");
  const [submittedMood, setSubmittedMood] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood }),
    });

    setSubmittedMood(mood);
    setMood("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <h1 className="text-2xl font-bold mb-4">How are you feeling today?</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="" disabled>Select your mood</option>
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😔 Sad</option>
          <option value="Anxious">😟 Anxious</option>
          <option value="Excited">😄 Excited</option>
          <option value="Angry">😡 Angry</option>
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>

      {submittedMood && (
        <div className="mt-6 text-lg font-semibold text-green-700">
          You submitted: {submittedMood}
        </div>
      )}
    </div>
  );
}
