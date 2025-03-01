import Image from "next/image";
import Binance from "@/public/images/Binance.png";
import Gatepay from "@/public/images/Gatepay.png";
import Tabs from "./Tabs";

export default function HeroSection() {
  return (
    <div className="bg-container relative w-full h-[500px] flex flex-col items-center justify-center text-white px-3">
      <h1 className="text-[36px] lg:text-7xl font-bold text-[#FFFFFF] text-center">
        Embark On A Journey Of Greatness
      </h1>
      <p className="text-lg lg:text-[40px] font-medium text-[#FFFFFF] mt-6">
        Powered by:
      </p>
      <div className="flex items-center gap-6 mt-8 space-x-8 lg:space-x-14">
        <Image src={Binance} alt="Binance" width={100} height={50} />
        <Image src={Gatepay} alt="Gate Pay" width={100} height={50} />
      </div>
      <div>
        <Tabs />
      </div>
    </div>
  );
}
