import React from "react";
import WhyNesterlifyCard from "../cards/WhyNesterlifyCard";

const features = [
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1741001906/Frame_2147224744_s6i2qv.png",
    title: "No-hassle best price guarantee",
    description:
      "Experience peace of mind with our no-hassle best price guarantee.",
    size: "w-15 h-15",
  },
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1741001968/Frame_2147224744_2_f855z5.png",
    title: "Customer care available 24/7",
    description:
      "Customer care available 24/7 for your convenience and peace of mind.",
    size: "w-15 h-15",
  },
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1741001906/Frame_2147224744_1_edj4in.png",
    title: "Hand-picked Tour & Vacations",
    description:
      "Discover hand-picked tours and activities tailored just for you.",
    size: "w-10 h-10",
  },
  {
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1741001906/image_107_iyzy5v.png",
    title: "Free Travel Insurance",
    description:
      "Enjoy peace of mind on your adventures with our complimentary travel insurance.",
    size: "w-10 h-10",
  },
];

const WhyNesterlify: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-0 md:w-[90%] mx-auto bg-gray-50">
      <div className="">
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
