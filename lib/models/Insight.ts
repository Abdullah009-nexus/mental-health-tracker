
import mongoose, { Schema, models } from "mongoose";

const InsightSchema = new Schema(
  {
    text: String,
    mood: String,
    summary: String,
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Insight = models.Insight || mongoose.model("Insight", InsightSchema);
