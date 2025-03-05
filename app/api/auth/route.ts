import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const urlParams = new URL(req.url).searchParams;
  const authType = urlParams.get("authType");
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_URL) {
    return NextResponse.json(
      { message: "API URL is missing." },
      { status: 500 }
    );
  }

  if (!authType) {
    return NextResponse.json(
      { message: "Auth type is required." },
      { status: 400 }
    );
  }

  const url = `${API_URL}/auth/${authType}/`;
  try {
    const body = await req.json();
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
    console.error("Error in auth route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
