"use client";
import { Button } from "./ui/button"; // shadcn/ui Button
import { Card, CardContent, CardTitle } from "./ui/card"; // shadcn/ui Card
import { useRouter } from "next/navigation";

// HomePage component: Hero, Features, Footer
export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-16 bg-gradient-to-b from-blue-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-blue-800">
          Track Your Mental Health with AI
          </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          Your private, intelligent companion for a healthier mind. Start tracking your mood, journaling, and get AI-powered insights.
        </p>
        {/* CTA Button using shadcn/ui */}
        <Button onClick={() => router.push("/dashboard")} className="text-lg px-8 py-3">
          Start Tracking
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          {/* Mood Tracker Card */}
          <Card className="flex flex-col items-center p-6">
            <span className="text-4xl mb-2">😊</span>
            <CardTitle className="mb-2">Mood Tracker</CardTitle>
            <CardContent className="text-gray-600 text-center">
              Log your daily mood and see trends over time.
            </CardContent>
          </Card>
          {/* AI Check-in Card */}
          <Card className="flex flex-col items-center p-6">
            <span className="text-4xl mb-2">🤖</span>
            <CardTitle className="mb-2">AI Check-in</CardTitle>
            <CardContent className="text-gray-600 text-center">
              Get personalized check-ins and insights powered by AI.
            </CardContent>
          </Card>
          {/* Journaling Card */}
          <Card className="flex flex-col items-center p-6">
            <span className="text-4xl mb-2">📓</span>
            <CardTitle className="mb-2">Journaling</CardTitle>
            <CardContent className="text-gray-600 text-center">
              Write and reflect on your thoughts and feelings.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-500 text-sm mt-auto">
        &copy; {new Date().getFullYear()} Mental Health Tracker &mdash; <a href="/help" className="underline hover:text-blue-600">Help</a>
      </footer>
    </div>
  );
} 