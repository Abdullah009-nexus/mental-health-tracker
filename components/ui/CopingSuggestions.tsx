"use client";

export function CopingSuggestions({ mood }: { mood: string | null }) {
  if (!mood) return null;

  const suggestions: Record<string, { title: string; desc: string; link?: string }[]> = {
    Sad: [
      {
        title: "Try a 2-minute breathing video",
        desc: "This helps calm your nervous system.",
        link: "https://www.youtube.com/watch?v=SEfs5TJZ6Nk",
      },
      {
        title: "Listen to relaxing music",
        desc: "Music can shift your emotional state.",
        link: "https://www.youtube.com/watch?v=2OEL4P1Rz04",
      },
    ],
    Neutral: [
      {
        title: "Practice gratitude",
        desc: "Write 3 things you're thankful for today.",
      },
      {
        title: "Take a short walk",
        desc: "Movement boosts your energy and clarity.",
      },
    ],
    Happy: [
      {
        title: "Celebrate your moment",
        desc: "Write why you're feeling good today.",
      },
      {
        title: "Spread kindness",
        desc: "Send a positive message to a friend.",
      },
    ],
    Excited: [
      {
        title: "Channel your energy",
        desc: "Start a mini project or plan your goals.",
      },
      {
        title: "Stay grounded",
        desc: "Try a quick breathing exercise to stay balanced.",
      },
    ],
    Angry: [
      {
        title: "Do a 5-minute anger release meditation",
        desc: "Guided practice to release tension.",
        link: "https://www.youtube.com/watch?v=bo1ZAcK3xDk",
      },
      {
        title: "Take a pause",
        desc: "Walk away and breathe deeply before responding.",
      },
    ],
    Anxious: [
      {
        title: "Ground yourself with 5-4-3-2-1 technique",
        desc: "Focus on your senses to stay present.",
        link: "https://www.youtube.com/watch?v=WFsYkJ5zW3o",
      },
      {
        title: "Try progressive muscle relaxation",
        desc: "Helps reduce body tension and anxiety.",
        link: "https://www.youtube.com/watch?v=1nZEdqcGVzo",
      },
    ],
    Calm: [
      {
        title: "Enjoy the calm moment",
        desc: "Reflect on what helped you feel this way.",
      },
      {
        title: "Maintain balance",
        desc: "Listen to peaceful nature sounds.",
        link: "https://www.youtube.com/watch?v=lFcSrYw-ARY",
      },
    ],
  };

  const moodSuggestions = suggestions[mood] || [];

  return (
    <div className="max-w-xl mx-auto rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Suggestions for when you're feeling {mood}
      </h2>
      <div className="space-y-4">
        {moodSuggestions.map((sug, idx) => (
          <div
            key={idx}
            className="rounded-md p-4 hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold text-blue-200">{sug.title}</h3>
            <p className="text-sm text-white mb-2">{sug.desc}</p>
            {sug.link && (
              <a
                href={sug.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300 hover:underline"
              >
                Try Now →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}