import axios from "axios";

interface AuthResponse {
  access_token: string;
}

const getAccessToken = async (): Promise<string | null> => {
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
    console.error("Error fetching access token:", error);
    return null;
  }
};
