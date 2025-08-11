'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!email) {
      setMessage('Please enter an email.');
      return;
    }

    // Simulate successful login by setting a cookie
    document.cookie = "isLoggedIn=true; path=/; max-age=86400"; // expires in 1 day

    // Optionally store email locally
    localStorage.setItem('userEmail', email);

    // Redirect to dashboard immediately
    router.push('/dashboard');
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden m-0 p-0">
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

      <div className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center px-4 text-white text-center bg-black/30 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Dummy Login</h1>
        <div className="w-full max-w-md bg-black/40 p-6 rounded-xl shadow-lg space-y-4">
          <p className="text-lg">Enter your email to sign in (dummy mode).</p>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleLogin}
            className="w-full py-2 px-4 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
          >
            Sign In
          </button>
          {message && <p className="text-green-400">{message}</p>}
        </div>
      </div>
    </div>
  );
}
