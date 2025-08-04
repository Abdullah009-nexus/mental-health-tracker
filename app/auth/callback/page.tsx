'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallbackPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const redirect = async () => {
      // Exchange code for session (required in production)
      const { error } = await supabase.auth.exchangeCodeForSession();

      if (error) {
        console.error('Exchange error:', error.message);
        router.replace('/login');
      } else {
        router.replace('/dashboard');
      }
    };

    redirect();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">🔄 Signing you in, please wait...</p>
    </div>
  );
}
