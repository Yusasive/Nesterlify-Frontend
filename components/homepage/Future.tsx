"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { A, B, C, D, E, F, G } from "@/public/images/coins/payment";

const Future = () => {
  const router = useRouter();

  const goTo = () => {
    router.push("/coins");
  };

  return (
    <section className="w-full py-10 mx-auto flex flex-col items-center mt-0 md:mb-5 md:mt-5">
      <div className="w-full md:w-[90%] bg-[#F5F5F5] px-4 pt-4 pb-[5rem] rounded-[16px]">
        <div className="w-full md:w-[fit-content] flex flex-col items-center gap-1 mx-auto">
          <h4 className="text-[20px] text-nowrap md:text-wrap md:text-[44px] text-center text-[#2C2C2C] font-medium">
            The Future of Global Tourism
          </h4>
          <p className="text-[16px] md:text-[16px] text-[#7F7F7F] font-regular mt-3">
            At Nesterlify, we take pride in being the leading
            cryptocurrency-friendly platform for booking; Flights, Hotels,
            Vacations, and Cars worldwide. Whether you traveling for business
            or leisure, we make it simple to pay for your travel using your
            preferred cryptocurrency. Let us power your next adventure!
          </p>
        </div>

        <div className="w-[fit-content] flex m-auto items-center mt-4">
          <FaAngleLeft className="text-[#3F3F3F] cursor-pointer" />

          <div className="w-4/5 mx-auto flex flex-row items-center overflow-x-scroll px-1 gap-4 duration-700 scroll-smooth noscroll">
            {[A, B, C, D, E, F, G].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Payment method ${index + 1}`}
                width={50}
                height={50}
                className="sm:min-w-[4%] min-w-[12%] object-cover"
              />
            ))}
          </div>

          <FaAngleRight className="text-[#3F3F3F] cursor-pointer" />
        </div>

        <button
          onClick={goTo}
          className="flex flex-row items-center py-2 px-4 text-[16px] font-medium font-Satoshi mx-auto mt-8 gap-1 bg-[#F05A1B] text-white rounded-[8px]"
        >
          View All Payment Options
        </button>
      </div>
    </section>
  );
};

export default Future;
