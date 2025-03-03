import React from "react";
import Image from "next/image";

const GlobalSupport = () => {
  return (
    <div className="w-full pt-5">
      <div className="w-full md:w-[90%] mx-auto md:rounded-[16px] bg-[#FFE6DC] py-[3rem]">
        <div className="w-[fit-content] flex flex-col items-center gap-1 mx-auto">
          <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
          <h4 className="text-[25px] md:text-[44px] text-center text-[#2C2C2C] font-medium">
            Our Global Sponsors
          </h4>
          <p className="text-[16px] md:text-[18px] text-center text-[#7F7F7F] font-regular">
            Trusted and backed by forward thinking patners
          </p>
        </div>

        <div className="w-[90%] md:w-[90%] mx-auto gap-4 md:gap-0 grid grid-cols-3 md:grid-cols-6 items-center mt-4 md:mt-4">
          <Image
            src="/images/sponsors/binance.png"
            alt=""
            className="w-[84.84px] md:w-[170.66px]"
            width={170.66}
            height={110.73}
          />
          <Image
            src="/images/sponsors/gatepay.png"
            alt=""
            className="w-[67.1px] md:w-[89.31px]"
            width={89.31}
            height={78.81}
          />
          <Image
            src="/images/sponsors/iata.png"
            alt=""
            className="w-[75px] md:w-[100px]"
            width={100}
            height={65}
          />
          <Image
            src="/images/sponsors/tripad.png"
            alt=""
            className="w-[72px] md:w-[130px]"
            width={130}
            height={83.11}
          />
          <Image
            src="/images/sponsors/tether.png"
            alt=""
            className="w-[50px] md:w-[73px]"
            width={73}
            height={85}
          />
          <Image
            src="/images/sponsors/wechat.png"
            alt=""
            className="w-[78px] md:w-[142px]"
            width={142}
            height={83.91}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalSupport;
