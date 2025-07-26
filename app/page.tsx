"use client";

export default function HomePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 🔥 Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧠 Page Content goes here */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MindTrack AI</h1>
        <p className="text-lg md:text-xl max-w-xl">
          Your personal companion to track mental health and get AI-powered insights.
        </p>
      </div>
    </div>
  );
}
