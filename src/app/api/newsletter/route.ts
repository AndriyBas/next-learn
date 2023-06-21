import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
import { client } from "@/client/mongo";

export async function POST(request: NextRequest) {
  // const dataPath = path.join(process.cwd(), "data", "newsletter.json");
  // const file = await fs.readFileSync(dataPath, { encoding: "utf-8" });
  // const data: any[] = JSON.parse(file);

  const body = await request.json();
  if (!body.email) {
    return NextResponse.json({ message: "email is required" }, { status: 422 });
  }
  await client.connect();
  await client.db().collection("newsletter").insertOne(body);

  await client.close();

  // data.push({ email: body.email });
  // await fs.writeFileSync(dataPath, JSON.stringify(data));

  return NextResponse.json({ message: "ok" });
}
