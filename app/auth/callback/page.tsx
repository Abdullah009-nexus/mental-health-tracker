'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallbackPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleSignIn = async () => {
      // Get session from URL hash and store it
      await supabase.auth.getSession();

      // Redirect to dashboard after successful login
      router.replace('/dashboard');
    };

    handleSignIn();
  }, [supabase, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">🔄 Signing you in, please wait...</p>
    </div>
  );
}
