"use client";

import Image from "next/image";

const Explore = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-0 md:w-[90%] mx-auto">
      <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
      <h3 className="mb-12 text-center text-[#2C2C2C] font-medium text-2xl lg:text-[50.94px] ">
        Explore <br /> Worldwide Destinations
      </h3>

      <div className=" flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-[48%] flex items-center justify-between p-4 md:p-8 bg-[#F05A1B] rounded-2xl">
          <div className="flex flex-col">
            <h4 className="text-white text-xl md:text-[44px] font-bold text-center">
              Global <br /> Tourism
            </h4>
            <button className="w-[160px] rounded-lg bg-white text-gray-800 font-medium text-[16px] p-2 mt-2">
              Learn More
            </button>
          </div>
          <Image
            src="/images/word.png"
            alt="Global Tourism"
            className="h-auto"
            height={230}
            width={250}
          />
        </div>

        <div
          className="w-full md:w-[48%] py-8 flex items-center justify-between p-4 md:p-8 bg-[#F05A1B] rounded-2xl"
          style={{
            backgroundImage: `url('images/ts.png')`,
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col">
            <h4 className="text-white text-xl md:text-[44px] font-bold text-center">
              Tours <br /> & <br /> Events
            </h4>
            <button className="w-[160px] rounded-lg bg-white text-gray-800 font-medium text-[16px] p-2 mt-2">
              Learn More
            </button>
          </div>
          <Image
            src="/images/wordbook.png"
            alt="Tours & Events"
            className="h-auto"
            width={250}
            height={157.66}
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
