import { NextResponse } from "next/server";
import { createToken } from "@/middleware/JWToken";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (
    email === process.env.ADMIN_ACCOUNT &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = createToken({ email, password });
    return NextResponse.json({ status: 200, token, role: "admin" });
  } else {
    return NextResponse.json({ status: 400 });
  }
}
