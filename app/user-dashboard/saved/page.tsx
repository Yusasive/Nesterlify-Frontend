"use client";

import { useState, useEffect } from "react";
import { Location, Star, Heart } from "@/components/Icons";
import Image from "next/image";

const categories = ["All", "Flight", "Hotel", "Car", "Activity"];

// Define the type for saved places
interface SavedPlace {
  id: number;
  category: string;
  image: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
}

const SavedItems = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Flight");
  const [savedPlaces, setSavedPlaces] = useState<SavedPlace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating API call delay
    setTimeout(() => {
      setSavedPlaces([
        {
          id: 1,
          category: "Flight",
          image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          name: "Sajek Valley",
          location: "Bandarban, Bangladesh",
          price: "$200",
          rating: 4.0,
          reviews: 14,
        },
        {
          id: 2,
          category: "Flight",
          image: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
          name: "Sajek Valley",
          location: "Bandarban, Bangladesh",
          price: "$200",
          rating: 4.0,
          reviews: 14,
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const filteredPlaces =
    selectedCategory === "All"
      ? savedPlaces
      : savedPlaces.filter((place) => place.category === selectedCategory);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-lg text-[#2C2C2C] font-semibold py-6">Saved</h2>

      <div className="flex gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-md text-base font-medium ${
              selectedCategory === category
                ? "bg-[#F05A1B] text-[#FFFFFF]"
                : "bg-[#F1F1F1] text-[#7F7F7F]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-6">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md animate-pulse"
            >
              <div className="w-80 h-56 bg-gray-300 rounded-lg"></div>
              <div className="flex-1 ml-8 space-y-4">
                <div className="h-6 bg-gray-300 w-32 rounded"></div>
                <div className="h-6 bg-gray-300 w-48 rounded"></div>
                <div className="h-4 bg-gray-300 w-40 rounded"></div>
                <div className="h-4 bg-gray-300 w-20 rounded"></div>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>
      ) : filteredPlaces.length === 0 ? (
        <p className="text-gray-500 text-center align-middle py-20 text-base">
          No Saved found
        </p>
      ) : (
        <div className="space-y-6">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
            >
              <Image
                src={place.image}
                alt={place.name}
                width={330}
                height={225}
                className="w-80 h-56 rounded-lg object-cover"
              />

              <div className="flex-1 ml-8 space-y-4">
                <span className="text-base font-medium bg-[#EEE7FF] text-[#5A1BF0] px-3 py-2 rounded-full">
                  • {place.category}
                </span>
                <h3 className="text-lg mt-4 text-[#2C2C2C] font-medium">
                  {place.name}
                </h3>

                <p className="flex flex-row text-[#7F7F7F] text-base">
                  <Location /> <span className="ml-3">{place.location}</span>
                </p>

                <p className="text-[#5A1BF0] text-sm">{place.price}</p>

                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Star />
                  <span className="ml-1">
                    {place.rating} ({place.reviews} Reviews)
                  </span>
                </div>
              </div>

              <div className="items-start">
                <Heart />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedItems;
