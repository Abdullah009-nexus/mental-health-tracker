import mongoose, { Schema, models } from "mongoose";

const InsightSchema = new Schema(
  {
    mood: String,
    userInput: String,
    aiResponse: String,
  },
  { timestamps: true }
);


export const Insight = models.Insight || mongoose.model("Insight", InsightSchema);
