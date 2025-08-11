"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient, User } from "@supabase/auth-helpers-nextjs";
import NavbarClient from "@/components/ui/NavbarClient";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        <NavbarClient />
        <main>{children}</main>
      </div>
    </div>
  );
}
