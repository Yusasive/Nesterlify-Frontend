import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Define expected response types
interface AuthResponse {
  access_token: string;
}

interface AirportData {
  id: string;
  name: string;
  iataCode: string;
  address?: {
    cityName: string;
    countryName: string;
  };
}

interface AirportApiResponse {
  data: AirportData[];
}

async function getAccessToken(): Promise<string | null> {
  try {
    const response = await axios.post<AuthResponse>(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_API_KEY!,
        client_secret: process.env.AMADEUS_API_SECRET!,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error getting Amadeus access token:", error);
    return null;
  }
}

// Next.js API Route - GET handler
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json(
      { error: "Failed to authenticate" },
      { status: 500 }
    );
  }

  try {
    const response = await axios.get<AirportApiResponse>(
      `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.error("Error fetching airport data:", error);
    return NextResponse.json(
      { error: "Failed to fetch airport data" },
      { status: 500 }
    );
  }
}
