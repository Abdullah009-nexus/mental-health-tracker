'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallbackPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const redirect = async () => {
      // optional small delay to allow Supabase to handle session
      await new Promise((r) => setTimeout(r, 1000));
      router.replace('/dashboard');
    };

    redirect();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">🔄 Signing you in, please wait...</p>
    </div>
  );
}
