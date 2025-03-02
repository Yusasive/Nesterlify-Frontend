"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const tripTypes = ["One way", "Round trip", "Multi-city"];

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState("Round trip");
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(new Date());
  const [passengers, setPassengers] = useState({ adults: 1, children: 0 });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-3">
      {/* Trip Type Selection */}
      <RadioGroup
        value={tripType} 
        onChange={setTripType}
        className="flex space-x-2"
      >
        {tripTypes.map((type) => (
          <RadioGroup.Option key={type} value={type} className="cursor-pointer">
            {({ checked }) => (
              <span
                className={`px-3 py-1 rounded-full text-sm ${checked ? "bg-orange-500 text-white" : "bg-gray-100"}`}
              >
                {type}
              </span>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>

      {/* Flight Inputs */}
      <div className="flex items-center space-x-2 border p-2 rounded-lg flex-1">
        <FaPlaneDeparture className="text-gray-500" />
        <input type="text" placeholder="From" className="outline-none flex-1" />
      </div>
      <div className="flex items-center space-x-2 border p-2 rounded-lg flex-1">
        <FaPlaneArrival className="text-gray-500" />
        <input type="text" placeholder="To" className="outline-none flex-1" />
      </div>

      {/* Date Pickers */}
      <div className="flex items-center space-x-2 border p-2 rounded-lg">
        <BsCalendar className="text-gray-500" />
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
        />
      </div>

      {tripType === "Round trip" && (
        <div className="flex items-center space-x-2 border p-2 rounded-lg">
          <BsCalendar className="text-gray-500" />
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
          />
        </div>
      )}

  
      <div className="text-sm">
        {passengers.adults} Adults - {passengers.children} Children
      </div>

      {/* Search Button */}
      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
        Search
      </button>
    </div>
  );
}
