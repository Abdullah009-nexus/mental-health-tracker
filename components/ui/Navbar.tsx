"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-md py-4">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-700">
            🧠 MindMate
          </Link>

          {/* Nav Links */}
          <Link href="/features" className="text-gray-700 hover:text-blue-600 font-medium">
            Features
          </Link>
          <Link href="/signup" className="text-gray-700 hover:text-blue-600 font-medium">
            Signup
          </Link>
          <Link href="/privacy" className="text-gray-700 hover:text-blue-600 font-medium">
            Privacy
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
