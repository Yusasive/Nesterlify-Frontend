import React from "react";
import WhyNesterlifyCard from "../cards/WhyNesterlifyCard";
import { FaMedal, FaHeadset, FaSuitcaseRolling, FaPlane } from "react-icons/fa";

const features = [
  {
    icon: <FaMedal />,
    title: "No-hassle best price guarantee",
    description:
      "Experience peace of mind with our no-hassle best price guarantee.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer care available 24/7",
    description:
      "Customer care available 24/7 for your convenience and peace of mind.",
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Hand-picked Tour & Vacations",
    description:
      "Discover hand-picked tours and activities tailored just for you.",
  },
  {
    icon: <FaPlane />,
    title: "Free Travel Insurance",
    description:
      "Enjoy peace of mind on your adventures with our complimentary travel insurance.",
  },
];

const WhyNesterlify: React.FC = () => {
  return (
    <section className="py-16 px-2 md:px-32 bg-gray-50">
      <div className="text-center">
        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
        <h2 className="text-xl lg:text-[44px] text-[#2C2C2C] font-medium text-center mb-8">
          Why Nesterlify
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <WhyNesterlifyCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNesterlify;
