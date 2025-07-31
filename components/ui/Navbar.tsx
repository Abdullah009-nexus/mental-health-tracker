"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Navbar() {
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    getSession();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <nav className="w-full px-6 py-4 backdrop-blur-md bg-black/20 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-100">
          Soul Track 🕊️
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6 text-white font-medium">
          <Link href="/dashboard">My Summaries</Link>
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>

          {isLoggedIn && pathname === "/dashboard" ? (
            <button onClick={handleSignOut} className="hover:text-blue-300">
              🚪 Sign Out
            </button>
          ) : (
            <Link href="/login" className="hover:text-blue-300">
              👤 Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}