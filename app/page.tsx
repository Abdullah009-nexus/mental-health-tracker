"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const quotes = [
  "Your mental health is a priority.",
  "Small steps every day lead to big changes.",
  "Self-care is not selfish.",
  "Your feelings are valid.",
  "Healing is not linear.",
];

export default function Home() {
  const router = useRouter();
  const [quote, setQuote] = useState("");
  const [streak, setStreak] = useState(7);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6 text-gray-800 dark:text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Mental Health Tracker 🌱
        </h1>

        <p className="text-lg md:text-xl mb-4 max-w-xl">
          Track your mood, write your journal, and get AI-powered emotional support.
        </p>

        <p className="text-md mb-8 text-gray-600 dark:text-gray-400">
          Current Streak: {streak} Days 🌟
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <button
            onClick={() => router.push("/mood")}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105"
          >
            📝 Mood Tracker
          </button>

          <button
            onClick={() => router.push("/journal")}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105"
          >
            📖 Journal
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105"
          >
            📊 Dashboard
          </button>
        </div>

        <blockquote className="italic text-gray-600 dark:text-gray-400 max-w-md">
          "{quote}"
        </blockquote>
      </main>

      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="firefly"></div>
      ))}
    </>
  );
}
