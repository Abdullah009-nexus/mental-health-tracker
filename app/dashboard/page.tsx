"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface JournalEntry {
  mood: string;
  journal: string;
  timestamp: string;
}

export default function DashboardPage() {
  const [mood, setMood] = useState("");
  const [journal, setJournal] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries") || "[]");
    setEntries(saved);
  }, []);

  const handleSubmit = async () => {
    const newEntry: JournalEntry = {
      mood,
      journal,
      timestamp: new Date().toISOString(),
    };

    const updatedEntries = [newEntry, ...entries];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
    setMood("");
    setJournal("");

    // 🔁 (Future) Send to n8n webhook here
    // await fetch("https://n8n-webhook-url.com", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newEntry),
    // });

    alert("Entry saved!");
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white">
      <div className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">🧘 Welcome Back!</h1>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">How are you feeling today?</label>
          <Input
            placeholder="e.g. Happy, Sad, Anxious"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Write your thoughts</label>
          <Textarea
            placeholder="Start typing your journal here..."
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Save Entry
        </Button>
      </div>

      {/* 🔽 Future: List of previous entries (optional preview) */}
      {/* <div className="mt-10 max-w-md w-full space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="bg-white p-4 rounded shadow text-black">
            <div className="text-sm text-gray-600">{new Date(entry.timestamp).toLocaleString()}</div>
            <div className="font-medium">Mood: {entry.mood}</div>
            <div>{entry.journal}</div>
          </div>
        ))}
      </div> */}
    </main>
  );
}
