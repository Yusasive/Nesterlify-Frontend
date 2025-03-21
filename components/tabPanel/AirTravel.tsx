"use client";
import ResultModal from "../user-dashboard/airport/Result";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { HiChevronDown, HiSwitchHorizontal } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUserFriends } from "react-icons/fa";

const tripTypes = ["One way", "Round trip", "Multi-city"];
const classes = ["Economy", "Premium Economy", "Business", "First Class"];

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState("Round trip");
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(new Date());
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update Functions
  const updateAdults = (value: number) => {
    setPassengers((prev) => ({
      ...prev,
      adults: Math.max(1, value), // Ensure at least 1 adult
    }));
  };

  const updateChildren = (value: number) => {
    setPassengers((prev) => ({
      ...prev,
      children: Math.max(0, value), // Ensure at least 0 children
    }));
  };

  // Swap function for "From" and "To" locations
  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  // API Call Function
 const searchFlights = async () => {
   if (!from || !to) {
     alert("Please enter both origin and destination");
     return;
   }

   setLoading(true);

   try {
     const response = await fetch("/api/search-flight", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         from,
         to,
         departureDate: departureDate?.toISOString(),
         returnDate: returnDate?.toISOString(),
         tripType,
         passengers,
         selectedClass,
       }),
     });

     const data = await response.json();

     if (!response.ok) {
       throw new Error(data.error || "Error fetching flights");
     }

     if (!data?.data || data.data.length === 0) {
       alert("No flights found for the selected criteria.");
       return;
     }

     setResults(data);
     setIsModalOpen(true);
   } catch (error: unknown) {
     console.error("Error fetching flights:", error);

     let errorMessage = "Error fetching flights. Please try again.";

     if (error instanceof Error) {
       errorMessage = error.message;
     }

     alert(errorMessage);
   }

 };


  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-3">
      {/* Trip Type Selection */}
      <div className="flex space-x-6">
        <RadioGroup
          value={tripType}
          onChange={setTripType}
          className="flex space-x-4"
        >
          {tripTypes.map((type) => (
            <RadioGroup.Option
              key={type}
              value={type}
              className="cursor-pointer"
            >
              {({ checked }) => (
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      checked ? "border-[#F05A1B]" : "border-gray-400"
                    }`}
                  >
                    {checked && (
                      <div className="w-2.5 h-2.5 bg-[#F05A1B] rounded-full" />
                    )}
                  </div>
                  <span className="text-[#2C2C2C]">{type}</span>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
        <Listbox value={selectedClass} onChange={setSelectedClass}>
          <div className="relative">
            <Listbox.Button className="w-32 flex justify-between items-center px-4 py-2 border rounded-md text-gray-700 bg-white">
              {selectedClass}
              <HiChevronDown className="text-gray-500" />
            </Listbox.Button>
            <Listbox.Options className="absolute text-black w-full mt-1 bg-white border rounded-md shadow-lg">
              {classes.map((flightClass) => (
                <Listbox.Option key={flightClass} value={flightClass}>
                  {({ selected }) => (
                    <div
                      className={`px-4 py-2 cursor-pointer ${
                        selected
                          ? "bg-orange-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {flightClass}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Flight Inputs */}
      <div className="flex flex-row">
        <div className="flex items-center space-x-2">
          {/* From Input */}
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From (IATA Code)"
            className="border border-black text-black rounded-lg px-4 py-2"
          />

          {/* Swap Button */}
          <button
            onClick={swapLocations}
            className="rounded-full border p-2 bg-white shadow-md hover:bg-gray-100"
          >
            <HiSwitchHorizontal className="text-gray-500" />
          </button>

          {/* To Input */}
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To (IATA Code)"
            className="border border-black text-black rounded-lg px-4 py-2"
          />
        </div>

        {/* Date Pickers */}
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
          className="border-none text-black rounded-lg px-4 py-2"
        />
        {tripType === "Round trip" && (
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            className="border-none text-black rounded-lg px-4 py-2"
          />
        )}

        {/* Divider */}
        <div className="border-l border-[#2C2C2C] h-12" />

        <div className="relative">
          {/* travelerType Display (Clickable to Open Dropdown) */}
          <div
            className="flex space-x-2 items-center cursor-pointer border border-gray-300 px-4 py-2 rounded-md"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FaUserFriends className="text-[#2C2C2C]" />
            <span className="text-gray-600">
              {passengers.adults} Adult{passengers.adults > 1 ? "s" : ""} -{" "}
              {passengers.children} Child{passengers.children > 1 ? "ren" : ""}
            </span>
          </div>

          {/* Dropdown Modal (Appears Below the Span) */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md p-4 z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Adults</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateAdults(passengers.adults - 1)}
                    className="bg-gray-200 text-black px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{passengers.adults}</span>
                  <button
                    onClick={() => updateAdults(passengers.adults + 1)}
                    className="bg-gray-200 text-black px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-700">Children</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateChildren(passengers.children - 1)}
                    className="bg-gray-200 text-black px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{passengers.children}</span>
                  <button
                    onClick={() => updateChildren(passengers.children + 1)}
                    className="bg-gray-200 text-black px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={searchFlights}
          className="bg-[#F05A1B] text-white px-6 py-2 rounded-lg"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Results Modal */}
      <ResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        results={results}
      />
    </div>
  );
}
