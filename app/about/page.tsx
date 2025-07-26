'use client';

import React from 'react';
import '@/app/globals.css';

export default function AboutPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center px-4 text-white text-center bg-black/30 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">About Soul Track 🕊️</h1>
        <p className="max-w-2xl text-lg mb-8 bg-black/40 p-4 rounded-xl shadow-md">
          Soul Track 🕊️ is your AI-powered mental wellness assistant. Whether you're feeling down, anxious, or just need a space to reflect—Soul Track helps you log your emotions, track your progress, and receive mindful prompts generated just for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl w-full">
          <div className="bg-black/50 p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">🧘‍♂️ Why Soul Track?</h2>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>Track your mood and emotional patterns over time</li>
              <li>AI-generated daily reflection & journaling prompts</li>
              <li>Visual graphs of your mental wellness journey</li>
              <li>Minimal, secure, and easy-to-use interface</li>
            </ul>
          </div>

          <div className="bg-black/50 p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">💡 Our Mission</h2>
            <p>
              To empower souls on their emotional journey through technology that’s compassionate, insightful, and private. Soul Track 🕊️ is your safe space for self-reflection and mental growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
