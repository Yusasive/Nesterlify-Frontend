"use client";

import { useState } from "react";
import Image from "next/image";
import { Location, Star } from "@/components/Icons";

interface Booking {
  id: string;
  title: string;
  location: string;
  image: string;
  bookingId: string;
  date: string;
  rating: number;
  reviews: number;
  status: "Ongoing" | "Completed" | "Cancelled";
  category: string;
}

// Dummy Booking Data
const dummyBookings: Booking[] = [
  {
    id: "1",
    title: "Sajek Valley",
    location: "Bandarban, Bangladesh",
    image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    bookingId: "12345678987654321",
    date: "April 24, 2024, 10:00PM",
    rating: 4.0,
    reviews: 14,
    status: "Cancelled",
    category: "Activity Booking",
  },
  {
    id: "2",
    title: "Cox's Bazar Beach",
    location: "Cox's Bazar, Bangladesh",
    image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    bookingId: "98765432123456789",
    date: "May 5, 2024, 12:00PM",
    rating: 4.5,
    reviews: 20,
    status: "Ongoing",
    category: "Hotel Booking",
  },
  {
    id: "3",
    title: "Bali Trip",
    location: "Bali, Indonesia",
    image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    bookingId: "56781234987654321",
    date: "June 15, 2024, 6:30PM",
    rating: 4.8,
    reviews: 35,
    status: "Completed",
    category: "Flight Booking",
  },
];

const categoryOptions = [
  "All",
  "Hotel Booking",
  "Flight Booking",
  "Activity Booking",
  "Car Booking",
];

const statusOptions = ["All", "Ongoing", "Completed", "Cancelled"];

const Bookings = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredBookings = dummyBookings.filter((booking) => {
    const categoryMatch =
      selectedCategory === "All" || booking.category === selectedCategory;
    const statusMatch =
      selectedStatus === "All" || booking.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="p-4 bg-white shadow rounded-lg w-full max-w-3xl">
      <h2 className="text-lg text-[#2C2C2C] font-semibold py-6">My bookings</h2>

      <div className="flex space-x-3 mb-4 relative">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#F1F1F1] text-base font-medium px-3 py-2 text-[#7F7F7F] rounded-md"
          >
            {selectedCategory} <span className="ml-2">▼</span>
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-10">
              {categoryOptions.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setDropdownOpen(false);
                  }}
                  className="bg-[#F1F1F1] text-base font-medium px-3 py-2 text-[#7F7F7F] rounded-md"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded text-base font-medium ${
                selectedStatus === status
                  ? status === "Cancelled"
                    ? "bg-[#F05A1B] text-[#FFFFFF]"
                    : "bg-[#F05A1B] text-[#FFFFFF]"
                  : "bg-[#F1F1F1] text-[#7F7F7F]"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div>
        {filteredBookings.length === 0 ? (
          <p className="text-gray-500 text-center align-middle py-20 text-base">
            No bookings found
          </p>
        ) : (
          filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="flex bg-gray-50 p-8 rounded-lg mb-4"
            >
              <Image
                src={booking.image}
                alt={booking.title}
                width={330}
                height={225}
                className="w-80 h-56 rounded-lg object-cover"
              />

              <div className="ml-8 space-y-4">
                <span className="text-base font-medium bg-[#EEE7FF] text-[#5A1BF0] px-3 py-2 rounded-full">
                  • {booking.category}
                </span>
                <h3 className="text-lg mt-4 text-[#2C2C2C] font-medium">
                  {booking.title}
                </h3>
                <p className="flex flex-row text-[#7F7F7F] text-base">
                  <Location /> <span className="ml-3">{booking.location}</span>
                </p>
                <p className="text-[#7F7F7F] text-sm">
                  Booking ID:{" "}
                  <span className="text-[#2C2C2C] ml-2">
                    {booking.bookingId}
                  </span>
                </p>
                <p className="text-[#7F7F7F] text-sm">
                  Date:{" "}
                  <span className="text-[#2C2C2C] ml-2">{booking.date}</span>
                </p>
                <div className="flex items-center text-sm mt-2">
                  <span className="flex flex-row text-[#2C2C2C] text-sm">
                    <Star /> {booking.rating}
                  </span>
                  <span className="text-[#7F7F7F] text-sm ml-2">
                    ({booking.reviews} Reviews)
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Bookings;
