import { NextRequest, NextResponse } from "next/server";
import { client } from "@/client/mongo";

export async function POST(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  const body: object = await request.json();
  const newComment: { [key: string]: any } = {
    ...body,
    eventId: params.eventId,
  };
  try {
    await client.connect();
    const result = await client
      .db()
      .collection("comments")
      .insertOne(newComment);
    newComment._id = result.insertedId;
    return NextResponse.json({ message: "ok", result, newComment });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  await client.connect();
  const comments = await client
    .db()
    .collection("comments")
    .find({ eventId: params.eventId })
    .sort({ _id: -1 })
    .toArray();
  return NextResponse.json({ comments });
}
