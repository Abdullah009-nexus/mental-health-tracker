'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardNavbar from '@/components/ui/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('mock-user');
    if (!user) {
      router.replace('/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (isLoggedIn === null) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/dash.mp4" type="video/mp4" />
      </video>

      {/* Removed the black/blur overlay */}

      {/* Main Content */}
      <div className="relative z-10">
        <DashboardNavbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
