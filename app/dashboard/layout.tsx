'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('mock-user');
    if (!user) {
      router.replace('/login'); // Redirect if not logged in
    }
  }, []);

  return <>{children}</>;
}
