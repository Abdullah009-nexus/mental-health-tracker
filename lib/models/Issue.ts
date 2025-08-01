import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema({
  issue: { type: String, required: true },
  description: { type: String, required: true },
  email: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

export const IssueModel = mongoose.models.Issue || mongoose.model("Issue", IssueSchema);
