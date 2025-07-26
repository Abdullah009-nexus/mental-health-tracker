"use client";

import Navbar from "./ui/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col items-center justify-center px-4 text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              🌿 SoulTrack <br />
              Empower Your Mind with AI ✨
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto mb-4">
              Your personal AI-powered mental health tracker. Monitor mood,
              reduce stress, and find emotional balance.
            </p>
            <p className="text-sm text-gray-200 mb-8">
              Track your feelings, get AI support, and grow stronger mentally
            </p>
            <Link
              href="/tracking"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Start Tracking
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
