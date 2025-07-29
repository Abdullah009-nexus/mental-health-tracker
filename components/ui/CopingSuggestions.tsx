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
  };

  const moodSuggestions = suggestions[mood] || [];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Suggestions for when you're feeling {mood}
      </h2>
      <div className="space-y-4">
        {moodSuggestions.map((sug, idx) => (
          <div
            key={idx}
            className="border rounded-md p-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-lg font-semibold text-blue-600">{sug.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{sug.desc}</p>
            {sug.link && (
              <a
                href={sug.link}
                target="_blank"
                className="text-sm text-blue-500 hover:underline"
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
