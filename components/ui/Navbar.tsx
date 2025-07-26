"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-transparent shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Link href="/" className="text-2xl font-bold text-blue-100">
          Soul Track 🕊️
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6 text-white font-medium">
          <Link href="/dashboard">My Summaries</Link>
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
          <Link href="/login" className="hover:text-blue-300">
            👤 Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
