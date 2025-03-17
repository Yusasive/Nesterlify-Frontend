import { NextRequest, NextResponse } from "next/server";
import Amadeus from "amadeus";

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID!,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET!,
});

export async function GET(req: NextRequest) {
  try {
    const { origin, destination, date } = Object.fromEntries(
      req.nextUrl.searchParams
    );

    if (!origin || !destination || !date) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: date,
      adults: "1",
      currencyCode: "USD",
      max: "5",
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching flights:", error);
    return NextResponse.json(
      { error: "Failed to fetch flight data" },
      { status: 500 }
    );
  }
}
