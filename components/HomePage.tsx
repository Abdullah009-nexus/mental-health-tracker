"use client";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            A New Beginning for Your Mental Wellness
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Track your mood, journal your thoughts, and receive AI-powered
            insights to support your journey. MindFlow is your private,
            intelligent companion for a healthier mind.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
} 