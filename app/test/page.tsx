"use client";

import React, { useState } from "react";
import SortingTabs from "@/components/user-dashboard/airport/SortingTabs";
import FlightCard from "@/components/user-dashboard/airport/FlightCard";
import { flights } from "@/data/airPlane"; 

const FlightsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("cheapest");

  // Sorting Logic
const sortedFlights = [...flights].sort((a, b) => {
  if (activeTab === "cheapest") {
    return (
      parseFloat(a.price.replace("$", "").replace(",", "")) -
      parseFloat(b.price.replace("$", "").replace(",", ""))
    );
  } else if (activeTab === "quickest") {
    return (
      parseInt(a.duration.replace("h", "").replace("m", "")) -
      parseInt(b.duration.replace("h", "").replace("m", ""))
    );
  } else {
    return 0;
  }
});


  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#FFFFFF]">
      <SortingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <p className="text-gray-500 mt-2">{sortedFlights.length} results found</p>

      {/* Render Flight Cards Dynamically */}
      <div className="space-y-4 mt-4">
        {sortedFlights.map((flight) => (
          <FlightCard key={flight.id} {...flight} />
        ))}
      </div>
    </div>
  );
};

export default FlightsPage;
