"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavbarClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkSession();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 backdrop-blur-md bg-black/20 text-white">
      <Link href="/" className="text-xl font-bold">
        Mental Health Tracker
      </Link>
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/help">Help</Link>
        {isLoggedIn ? (
          <button
            onClick={handleSignOut}
            className="text-red-300 hover:underline"
          >
            Sign Out
          </button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}