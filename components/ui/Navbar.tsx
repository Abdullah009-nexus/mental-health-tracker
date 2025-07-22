"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MindFlow
        </Link>
        <div>
          <Link href="/login" className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}