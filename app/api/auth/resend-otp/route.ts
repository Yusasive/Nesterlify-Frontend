import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!API_URL) {
      return NextResponse.json(
        { message: "API URL is missing." },
        { status: 500 }
      );
    }

    const url = `${API_URL}/auth/resend-otp`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error in Resend OTP route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
