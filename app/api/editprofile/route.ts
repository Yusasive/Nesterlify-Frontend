import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    
   const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log("🔍 API Base URL:", API_URL);

    if (!API_URL) {
      console.error("❌ API URL is missing in .env file.");
      return NextResponse.json(
        { message: "API URL is missing." },
        { status: 500 }
      );
    }

    const body = await req.json();
    if (!body || Object.keys(body).length === 0) {
      console.error("❌ Request body is empty.");
      return NextResponse.json(
        { message: "Request body cannot be empty." },
        { status: 400 }
      );
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.error("❌ Authorization header is missing.");
      return NextResponse.json(
        { message: "Unauthorized request." },
        { status: 401 }
      );
    }

    console.log("✅ Sending request to:", `${API_URL}/users/editprofile`);
    console.log("📤 Request Body:", body);

    const response = await fetch(`${API_URL}/users/editprofile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
    });

    const rawResponse = await response.text();
    console.log("📥 Raw Backend Response:", rawResponse);

    let data;
    try {
      data = JSON.parse(rawResponse);
    } catch (err) {
      console.error("❌ Error parsing backend response:", err);
      return NextResponse.json(
        { message: "Invalid JSON response from backend." },
        { status: 500 }
      );
    }

    if (!response.ok) {
      console.error("❌ Backend Error:", data);
      return NextResponse.json(data, { status: response.status });
    }

    console.log("✅ Update Successful:", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("❌ Unexpected Error in API route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
