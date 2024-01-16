import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    // Wait for the database connection to be established
    await connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    return new Response("Failed to fetch posts!", { status: 500 });
  }
};
