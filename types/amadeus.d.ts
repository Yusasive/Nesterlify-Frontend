declare module "amadeus" {
  export default class Amadeus {
    constructor(config: { clientId: string; clientSecret: string });
    shopping: {
      flightOffersSearch: {
        get(params: Record<string, string | number>): Promise<{ data: any }>;
      };
    };
  }
}
