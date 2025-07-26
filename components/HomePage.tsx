// components/HomePage.tsx
"use client";
import Navbar from "./ui/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-white text-center px-4">
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4">
            🧠 MindMate <br />
            Empower Your Mind with AI ✨
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-4">
            Your personal AI-powered mental health tracker. Monitor mood,
            reduce stress, and find emotional balance.
          </p>
          <p className="text-gray-500 mb-8">
            Track your feelings, get AI support, and grow stronger mentally.
          </p>
          <Link
            href="/tracking"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Start Tracking
          </Link>
        </div>
      </main>
    </>
  );
}
