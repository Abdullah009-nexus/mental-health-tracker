"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkMagicLinkLogin = async () => {
      const hasToken = searchParams.get("access_token");

      if (hasToken) {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          const {
            data: { subscription },
          } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === "SIGNED_IN" && session) {
              router.replace("/dashboard");
            }
          });

          return () => subscription.unsubscribe();
        } else {
          router.replace("/dashboard");
        }
      }
    };

    checkMagicLinkLogin();
  }, [searchParams, supabase, router]);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden m-0 p-0">
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white text-center px-6 sm:px-8 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to <span className="text-purple-100">SoulTrack</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
          Empowering your mental well-being through intelligent insights and mindful tracking.
        </p>
      </div>
    </div>
  );
}
