"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function MentalIssueForm() {
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!issue || !description) {
      toast.error("Please fill out all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issue, description }),
      });

      if (res.ok) {
        toast.success("Your issue has been noted. We'll get back soon.");
        setIssue("");
        setDescription("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Describe Your Issue
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Enter illness or issue name (e.g., anxiety, sleep disorder)
        </p>

        <div>
          <Label htmlFor="issue">Issue</Label>
          <Input
            id="issue"
            placeholder="e.g. Anxiety, Sleep Disorder"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            disabled={loading}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="description">Short Explanation</Label>
          <Textarea
            id="description"
            placeholder="Tell us a bit more (2–3 lines)..."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
            className="mt-1"
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Issue"}
        </Button>
      </form>
    </div>
  );
}
