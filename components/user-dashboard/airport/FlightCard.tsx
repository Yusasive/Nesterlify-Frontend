import React from "react";

interface FlightCardProps {
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  departure,
  arrival,
  duration,
  stops,
  price,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center w-full">
      {/* Airline Details */}
      <div className="flex flex-col space-y-3">
        <span className="text-base text-[#2C2C2C] font-medium">{airline}</span>
        <span className="text-[#7F7F7F] text-sm">
          British Airways, Air Canada
        </span>
        <span className="text-[#2C2C2C] text-sm ">10 return flight option</span>
      </div>

      {/* Flight Route & Duration */}
      <div className="flex flex-col space-y-3 items-center">
        <div className="flex flex-row justify-between gap-2">
          <div className="text-xs text-[#7F7F7F]">
            <span>15:00</span>
          </div>
          <div className="flex flex-col">
            <span className="text-orange-500 text-center">✈</span>
            <div className="flex flex-row space-x-3">
              <span className="text-gray-500">{stops}</span>
              <span className="text-gray-500">{duration}</span>
            </div>
          </div>
          <div className="text-xs text-[#7F7F7F]"> 
            <span>17:00</span>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full space-x-32">
          <span className="text-[#2C2C2C] text-base font-medium block">
            {departure}
          </span>
          <span className="text-[#2C2C2C] text-base font-medium block">
            {arrival}
          </span>
        </div>
      </div>

      {/* Price & Select Button */}
      <div className="flex flex-col items-end">
        <span className="text-lg font-bold text-[#5A1BF0]">{price}</span>
        <button className="bg-[#F05A1B] text-white px-8 py-2 rounded-xl">
          Select flight
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
