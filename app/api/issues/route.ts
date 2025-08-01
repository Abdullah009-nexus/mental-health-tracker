import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb"; // 
import { IssueModel } from "@/models/Issue"; // to be created

export async function POST(req: Request) {
  try {
    const { issue, description } = await req.json();

    if (!issue || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectToDB();

    const user = await getUser(); // optional, returns email if session exists

    const newIssue = await IssueModel.create({
      issue,
      description,
      email: user?.email || null,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Saved", issueId: newIssue._id });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
