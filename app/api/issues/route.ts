import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";  
import { IssueModel } from "@/lib/models/Issue"; 

export async function POST(req: Request) {
  try {
    const { issue, description } = await req.json();

    if (!issue || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectToDatabase();

    const newIssue = await IssueModel.create({
      issue,
      description,
      email: null,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Saved", issueId: newIssue._id });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
