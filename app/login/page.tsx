'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [_, startTransition] = useTransition();

  const handleMockLogin = () => {
    if (!email) return;

    // Save user email to localStorage
    localStorage.setItem('mock-user', JSON.stringify({ email }));

    // Use startTransition to ensure navigation works properly
    startTransition(() => {
      router.push('/dashboard');
    });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden m-0 p-0">
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

      {/* Fullscreen Blur Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center px-4 text-white text-center bg-black/30 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Mock Sign In</h1>
        <div className="w-full max-w-md bg-black/40 p-6 rounded-xl shadow-lg space-y-4">
          <p className="text-lg">Enter your email to sign in temporarily.</p>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleMockLogin}
            className="w-full py-2 px-4 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
          >
            Mock Login
          </button>
        </div>
      </div>
    </div>
  );
}
