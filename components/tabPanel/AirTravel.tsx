"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { Listbox } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { HiSwitchHorizontal } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUserFriends } from "react-icons/fa";

const tripTypes = ["One way", "Round trip", "Multi-city"];
const classes = ["Economy", "Premium Economy", "Business", "First Class"];

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState("Round trip");
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(new Date());
  const [passengers] = useState({ adults: 1, children: 0 });
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Swap function for "From" and "To" locations
  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-3">
      {/* Trip Type Selection */}
      <div className="flex space-x-6">
        {" "}
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

      <div className="flex flex-row">
        {" "}
        {/* Flight Inputs */}
        <div className="flex items-center space-x-2">
          {/* From Input */}
          <div className="flex flex-row items-center border rounded-full px-4 py-2 flex-1">
            <FaPlaneDeparture className="text-gray-400" />
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Swap Button */}
          <button
            onClick={swapLocations}
            className="rounded-full border p-2 bg-white shadow-md hover:bg-gray-100"
          >
            <HiSwitchHorizontal className="text-gray-500" />
          </button>

          {/* To Input */}
          <div className="flex items-center border rounded-full px-4 py-2 flex-1">
            <FaPlaneArrival className="text-gray-400" />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>
        </div>
        {/* Date Pickers */}
        <div className="flex items-center">
          {/* Departure Date */}
          <div className="flex flex-row space-x-2">
            <div className="flex items-center space-x-2 border-b pb-1">
              <BsCalendar className="text-[#2C2C2C]" />
            </div>
            <div className="flex flex-col">
              {" "}
              <span className="font-medium text-sm text-[#2C2C2C]">
                Departure date
              </span>
              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                className="outline-none bg-transparent font-normal text-sm text-[#2C2C2C]"
                dateFormat="dd MMM yyyy"
              />
            </div>
          </div>

          {/* Divider */}

          <div className="border-l border-[#2C2C2C] h-12" />


          <div className="flex flex-row space-x-2 ml-8">
            <div className="flex items-center border-b pb-1">
              <BsCalendar className="text-[#2C2C2C]" />
            </div>
            <div className="flex flex-col">
              {" "}
              <span className="font-medium text-sm text-[#2C2C2C]">
                Return date
              </span>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                className="outline-none bg-transparent font-normal text-sm text-[#2C2C2C]"
                dateFormat="dd MMM yyyy"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-l border-[#2C2C2C] h-12" />

          {/* Passenger Count */}
          <div className="flex flex-row space-x-2 ml-8">
            <div className="flex items-center border-b pb-1">
              <FaUserFriends className="text-[#2C2C2C]" />
            </div>
            <div>
              {" "}
              <span className="text-gray-600">
                {passengers.adults} Adult{passengers.adults > 1 ? "s" : ""} -{" "}
                {passengers.children} Child
                {passengers.children > 1 ? "ren" : ""}
              </span>
            </div>
          </div>
        </div>
        {/* Search Button */}
        <div className="ml-3 items-center">
          {" "}
          <button className="bg-[#F05A1B] text-base font-medium text-white px-8 py-3 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
