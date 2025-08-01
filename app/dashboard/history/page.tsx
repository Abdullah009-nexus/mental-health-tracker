"use client";

import { useEffect, useState } from "react";

type InsightType = {
  _id: string;
  mood: string;
  userInput: string;
  aiResponse: string;
  createdAt: string;
};

export default function HistoryPage() {
  const [insights, setInsights] = useState<InsightType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/history");
      const data = await res.json();
      setInsights(data);
    }
    fetchData();
  }, []);

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">History</h1>
      {insights.length === 0 ? (
        <p>No past insights yet.</p>
      ) : (
        insights.map((insight) => (
          <div key={insight._id} className="p-4 border rounded-lg shadow-md">
            <p className="text-sm text-gray-500">{new Date(insight.createdAt).toLocaleString()}</p>
            <p><strong>Mood:</strong> {insight.mood}</p>
            <p><strong>You said:</strong> {insight.userInput}</p>
            <p><strong>Insight:</strong> {insight.aiResponse}</p>
          </div>
        ))
      )}
    </main>
  );
}
