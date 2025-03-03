"use client";

import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Dianne Russell",
      text: "Absolutely fantastic! I found a last-minute flight and car rental for my weekend getaway, and the booking process couldn’t have been simpler. I strongly recommend Nesterlify for all your travel needs. I have used them already, and the experience was truly amazing.",
      stars: 5,
      image: "/images/testimonial/dianne.png",
    },
    {
      id: 2,
      name: "Olivia Grant",
      text: "I was able to compare prices and get the best deal quickly. The booking process was very smooth, and everything is organized in one place, which made planning so easy.",
      stars: 5,
      image: "/images/testimonial/olivia.png",
    },
    {
      id: 3,
      name: "Ethan Martinez",
      text: "I loved being able to pay with cryptocurrency. The transaction was fast, secure, and saved me from high foreign exchange fees on my international booking. It made it so much easier to manage travel expenses, especially across different countries. I definitely will be using this site for all my future trips.",
      stars: 5,
      image: "/images/testimonial/ethna.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full py-10 bg-[#F5F5F5]">
      <div className="w-full md:w-[90%] mx-auto py-[3rem]">
        <div className="w-fit flex flex-col items-center gap-1 mx-auto">
          <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
          <h4 className="text-[25px] md:text-[44px] text-center text-[#2C2C2C] font-medium">
            Testimonial
          </h4>
          <p className="text-[15px] md:text-[18px] text-center text-[#7F7F7F]">
            Dont just take our words for it. Hear from our users.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-5">
          {reviews.map((rev) => (
            <div
              className="flex h-full flex-col gap-[2rem] p-4 bg-white shadow-md rounded-tr-[60px] rounded-bl-[60px]"
              key={rev.id}
            >
              <p className="text-[15px] md:text-[16px] text-[#7F7F7F]">
                {rev.text}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="flex flex-row gap-4">
                  <div className="items-center">
                    {" "}
                    <Image
                      src={rev.image}
                      alt={rev.name}
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[15px] md:text-[16px] text-[#2C2C2C] font-medium">
                      {rev.name}
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: rev.stars }).map((_, index) => (
                        <FaStar color="#F05A1B" key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full md:hidden flex flex-col items-center mt-5">
          <div className="w-[90%] h-auto p-6 bg-white shadow-md rounded-tr-[60px] rounded-bl-[60px] transition-transform duration-300 ease-in-out">
            <p className="text-[14px] md:text-[16px] text-[#7F7F7F]">
              {reviews[activeIndex].text}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="flex flex-row gap-4">
                <div className="items-center">
                  {" "}
                  <Image
                    src={reviews[activeIndex].image}
                    alt={reviews[activeIndex].name}
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[15px] md:text-[16px] text-[#2C2C2C] font-medium">
                    {reviews[activeIndex].name}
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: reviews[activeIndex].stars }).map(
                      (_, index) => (
                        <FaStar color="#F05A1B" key={index} />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full max-w-[90%] mt-4">
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-[2%] transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-800"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-[2%] transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-800"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
