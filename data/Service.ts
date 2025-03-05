export interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  color: string;
  image: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Available Flights from 700+ Airlines",
    description:
      "Discover a world of options with flights from over 700 airlines. Book your perfect journey today.",
    category: "TRAVEL",
    color: "bg-[#E3FFE0] text-[#2EBF49]",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1740927054/Pixabay-6867678_gsgakc.png",
    slug: "flights",
  },
  {
    id: 2,
    title: "Powered by Binance",
    description:
      "Enjoy seamless transactions and robust security, all powered by Binance, the world's leading cryptocurrency exchange.",
    category: "FUELED",
    color: "bg-[#FFDBDB] text-[#DA1919]",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1740927118/Group_1321314632_v28af0.png",
    slug: "binance",
  },
  {
    id: 3,
    title: "Multiple Payment Options",
    description:
      "Experience the convenience of multiple payment options. Choose the method that suits you best.",
    category: "PAYMENT",
    color: "bg-[#FEDAFF] text-[#BA2EBF]",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1740926727/Homepage_2_ntrlmf.png",
    slug: "payment",
  },
  {
    id: 4,
    title: "Car Rentals and Car Transfers",
    description:
      "Experience seamless travel with our reliable car rentals and transfers. Enjoy convenience, comfort, and flexibility.",
    category: "RENTALS",
    color: "bg-[#EEE7FF] text-[#5A1BF0]",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1740926728/Pixabay-6867678_zjjqsu.png",
    slug: "rentals",
  },
  {
    id: 5,
    title: "Hotels, Tours, Events and Vacations",
    description:
      "Find the best accommodations, exciting tours, and engaging activities.",
    category: "BOOKING",
    color: "bg-[#FFE6DC] text-[#F05A1B]",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1740926728/image_1642_fapsvk.png",
    slug: "hotels",
  },
  {
    id: 6,
    title: "Excellent Customer Services",
    description: "Were here to help you every step of the way!",
    category: "SERVICE",
    color: "bg-[#F1ECBB] text-[#706812]",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1740926729/Link_xzmygz.png",
    slug: "support",
  },
];
