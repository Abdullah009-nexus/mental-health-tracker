'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallbackPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const exchangeSession = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href); // ✅ fixed here

      if (error) {
        console.error('Exchange error:', error.message);
        router.replace('/login');
      } else {
        router.replace('/dashboard');
      }
    };

    exchangeSession();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">🔄 Signing you in, please wait...</p>
    </div>
  );
}
