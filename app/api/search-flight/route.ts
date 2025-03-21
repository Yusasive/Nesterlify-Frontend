import { NextRequest, NextResponse } from "next/server";
import "server-only"; // Ensures this runs only on the server

let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

// 🔹 Function to get or refresh the Amadeus token
const getAmadeusToken = async () => {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  try {
    console.log("🔄 Refreshing Amadeus Token...");
    const tokenResponse = await fetch(
      `${process.env.NEXT_PUBLIC_AMADEUS_API_URL}/v1/security/oauth2/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID!,
          client_secret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET!,
        }),
      }
    );

    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) {
      console.error("❌ Token Error:", tokenData);
      throw new Error("Failed to fetch Amadeus token.");
    }

    cachedToken = tokenData.access_token;
    tokenExpiry = Date.now() + tokenData.expires_in * 1000;
    console.log("✅ Amadeus Token refreshed successfully.");

    return cachedToken;
  } catch (error) {
    console.error("❌ Error fetching Amadeus token:", error);
    throw new Error("Authentication error with Amadeus API");
  }
};

// 🔹 Handle API requests
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Incoming Request Body:", JSON.stringify(body, null, 2));

    const {
      from,
      to,
      departureDate,
      returnDate,
      tripType,
      passengers,
      selectedClass,
    } = body;

    if (!from || !to) {
      return NextResponse.json(
        { error: "Missing origin or destination" },
        { status: 400 }
      );
    }

    const token = await getAmadeusToken();
    const requestBody = {
      currencyCode: "USD",
      originDestinations: [
        {
          id: "1",
          originLocationCode: from.toUpperCase(),
          destinationLocationCode: to.toUpperCase(),
          departureDateTimeRange: {
            date: departureDate?.split("T")[0],
            time: "10:00:00",
          },
        },
        ...(tripType === "Round trip"
          ? [
              {
                id: "2",
                originLocationCode: to.toUpperCase(),
                destinationLocationCode: from.toUpperCase(),
                departureDateTimeRange: {
                  date: returnDate?.split("T")[0],
                  time: "17:00:00",
                },
              },
            ]
          : []),
      ],
      travelers: [
        ...Array.from({ length: passengers.adults }, (_, index) => ({
          id: `${index + 1}`,
          travelerType: "ADULT",
          fareOptions: ["STANDARD"],
        })),
        ...Array.from({ length: passengers.children }, (_, index) => ({
          id: `${passengers.adults + index + 1}`,
          travelerType: "CHILD",
          fareOptions: ["STANDARD"],
        })),
      ],
      sources: ["GDS"],
      searchCriteria: {
        maxFlightOffers: 5,
        flightFilters: {
          cabinRestrictions: [
            {
              cabin: selectedClass.toUpperCase().replace(" ", "_"),
              coverage: "MOST_SEGMENTS",
              originDestinationIds: ["1"],
            },
          ],
        },
      },
    };

    console.log("📤 Sending Request to Amadeus API...");
    const flightResponse = await fetch(
      `${process.env.NEXT_PUBLIC_AMADEUS_API_URL}/v2/shopping/flight-offers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    const flightData = await flightResponse.json();

    if (!flightResponse.ok) {
      console.error("❌ Amadeus API Error:", flightData);
      return NextResponse.json(
        { error: flightData.errors?.[0]?.detail || "API Error" },
        { status: flightResponse.status }
      );
    }

    console.log("✅ Flight data received successfully.");
    return NextResponse.json(flightData, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Error in API Route:", error);
      return NextResponse.json(
        { error: error.message || "Server error" },
        { status: 500 }
      );
    }

    // Handle unexpected error formats
    console.error("❌ Unknown Error:", error);
    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}
