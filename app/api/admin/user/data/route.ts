import { NextResponse } from "next/server";
import { createToken } from "@/middleware/JWToken";

export async function GET(request: Request) {
  console.log("user/data");
  return NextResponse.json({ status: 400 });
}
