import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received OTP Verification Request:", body); 

    if (!body.email || !body.activationCode) {
      return NextResponse.json(
        { message: "Email and activationCode are required." },
        { status: 400 }
      );
    }

    const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!API_URL) {
      return NextResponse.json(
        { message: "API URL is missing." },
        { status: 500 }
      );
    }

    const url = `${API_URL}/auth/activate`; 
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        activationCode: body.activationCode, 
      }),
    });

    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      let errorMessage = `Error ${response.status}`;
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        console.log("Backend Error Response:", errorData);
        errorMessage = errorData.message || errorMessage;
      }
      throw new Error(errorMessage);
    }

    // Parse response only if it's valid JSON
    const data =
      contentType && contentType.includes("application/json")
        ? await response.json()
        : null;

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error in OTP verification route:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
