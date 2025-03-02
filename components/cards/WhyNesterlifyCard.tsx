import React from "react";

interface WhyNesterlifyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyNesterlifyCard: React.FC<WhyNesterlifyCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl">{icon}</div>
      <div className="ml-4">
        <h3 className="text-xl text-[#2C2C2C] font-medium">{title}</h3>
        <p className="text-[#7F7F7F] text-base  mt-1">{description}</p>
      </div>
    </div>
  );
};

export default WhyNesterlifyCard;



