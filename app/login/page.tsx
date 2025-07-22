"use client";
import { useState } from "react";
import Link from "next/link";
import { Toaster, toast } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // This is where you'll integrate with Supabase
    // For now, we'll just simulate the API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate a successful response
    toast.success(`Magic link sent to ${email}! Check your inbox.`);
    
    // In a real app, you would handle errors here too
    // toast.error("Failed to send magic link. Please try again.");

    setLoading(false);
    setEmail("");
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <Link href="/" className="text-3xl font-bold text-blue-600">
              MindFlow
            </Link>
            <h2 className="mt-2 text-xl text-gray-700">
              Sign in with a magic link
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Enter your email, and we'll send you a link to sign in. No passwords needed.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
              >
                {loading ? "Sending..." : "Send Magic Link"}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 