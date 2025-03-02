"use client";
import { useState } from "react";
import { FaPlane, FaHotel, FaCar, FaSpa, FaMapMarkerAlt } from "react-icons/fa";
import AirTravel from "@/components/tabPanel/AirTravel";
import Hotels from "@/components/tabPanel/Hotels";
import Cars from "@/components/tabPanel/Cars";
import Vacations from "@/components/tabPanel/Vacations";
import Tracking from "@/components/tabPanel/Tracking";

const tabs = [
  { id: "air", name: "Air Travels", icon: <FaPlane /> },
  { id: "hotels", name: "Hotels", icon: <FaHotel /> },
  { id: "cars", name: "Cars", icon: <FaCar /> },
  { id: "vacations", name: "Vacations", icon: <FaSpa /> },
  { id: "tracking", name: "Tracking", icon: <FaMapMarkerAlt /> },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("air");

  return (
    <div className="w-full max-w-4xl lg:max-w-max mx-auto mt-20">
      {/* Tab Headers */}
      <div className="flex space-x-2 bg-white pb-4 rounded-2xl shadow">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col lg:flex-row items-center  font-medium text-xm lg:text-base space-x-2 px-2 lg:px-4 py-1 lg:py-2 rounded-2xl transition ${
              activeTab === tab.id
                ? "bg-[#FFE6DC] text-[#2C2C2C]"
                : "text-[#2C2C2C]"
            }`}
          >
            <span
              className={` ${activeTab === tab.id ? "text-[#FFFFFF] bg-[#F05A1B] p-4 rounded-full" : "text-[#2C2C2C] bg-[#F5F5F5] rounded-4xl"} p-1 lg:p-3 text-xm lg:text-2xl`}
            >
              {" "}
              {tab.icon}
            </span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === "air" && <AirTravel />}
        {activeTab === "hotels" && <Hotels />}
        {activeTab === "cars" && <Cars />}
        {activeTab === "vacations" && <Vacations />}
        {activeTab === "tracking" && <Tracking />}
      </div>
    </div>
  );
}
