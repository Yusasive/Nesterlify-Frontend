import React from "react";
import Image from "next/image";

interface WhyNesterlifyCardProps {
  image: string;
  title: string;
  description: string;
  size: string;
}

const WhyNesterlifyCard: React.FC<WhyNesterlifyCardProps> = ({
  image,
  title,
  description,
  size,
}) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div>
        {" "}
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className={`mt-4 ${size} object-contain`}
        />
      </div>
      <div className="ml-4">
        <h3 className="text-base lg:text-xl text-[#2C2C2C] font-medium">
          {title}
        </h3>
        <p className="text-[#7F7F7F] text-sm lg:text-base  mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyNesterlifyCard;
