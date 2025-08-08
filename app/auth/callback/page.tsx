'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const dynamic = 'force-dynamic';

export default function AuthCallbackPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleAuth = async () => {
      // 1. Exchange the code for a session
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
      if (error) {
        console.error('Auth error:', error.message);
        router.replace('/login');
        return;
      }

      // 2. Allow a short delay so cookies are fully written before middleware runs
      setTimeout(() => {
        router.replace('/dashboard');
      }, 300);
    };

    handleAuth();
  }, [router, supabase]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">Signing you in...</p>
        <p className="text-sm text-gray-400 mt-2">Please wait while we authenticate you</p>
      </div>
    </div>
  );
}
