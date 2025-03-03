"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";

import { E, F, G } from "@/public/images/coins/payment";
import { A, B, C, D, } from "@/public/images/coins/payment";

interface Coin {
  uuid: string;
  name: string;
  iconUrl: string;
}

interface ApiResponse {
  data: {
    coins: Coin[];
  };
}


const CoinsList = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCoins = async () => {
      try {
       const response = await axios.get<ApiResponse>(
         "https://api.coinranking.com/v2/coins",
         {
           headers: {
             "x-access-token": process.env.NEXT_PUBLIC_COINRANKING_API_KEY,
           },
         }
       );

        const fetchedCoins: Coin[] = response.data?.data?.coins || [];

        const excludedNames = new Set([
          "Wrapped staked liquid 2.0",
          "Wrapped liquid staked Ether 2.0",
          "Wrapped Ether",
          "Wrapped eETH",
          "Binance-Peg BSC-USD",
          "Tokenize Xchange",
          "Bittensor",
          "Artificial intelligence Alliance",
          "Whitebit coin",
          "Energy swap",
          "Tokenized exchange",
          "Virtual protocols",
          "Binance peg USD",
          "USDe",
          "WhiteBIT Coin",
          "Virtuals Protocol",
          "USDC",
          "Bitget Token",
          "Render Token",
          "EnergySwap",
          "Dai",
          "Tether USD",
          "Artificial Superintelligence Alliance",
          "Internet Computer (DFINITY)",
          "Lido Staked Ether",
        ]);

        const filteredCoins = fetchedCoins.filter(
          (coin) => !excludedNames.has(coin.name)
        );
        setCoins(filteredCoins);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] py-8">
      <div className="w-full md:w-[90%] mx-auto flex flex-col gap-3">
        {/* Breadcrumbs */}
        <div className="w-[90%] md:w-full mx-auto flex items-center gap-1">
          <button
            onClick={() => router.push("/")}
            className="hover:text-[#2C2C2C] text-[#2C2C2C] text-[13px] md:text-[15px]"
          >
            Home
          </button>
          <FaAngleRight className="text-[#141B34] text-[10px] md:mt-1" />
          <p className="text-[#F05A1B] text-[15px] md:text-[16px]">
            Payment option
          </p>
        </div>

        {/* Page Header */}
        <div className="w-[90%] md:w-full mx-auto flex flex-col gap-2">
          <h1 className="text-[#2C2C2C] text-[26px] md:text-[40px] font-medium">
            Payment Options
          </h1>
          <p className="text-[#2C2C2C] text-[15px] md:text-[16px] w-[100%] md:w-[65%] lg:w-[55%]">
            Book 3 million+ travel products on Nesterlify including flights,
            hotels, cars, vacations, resorts, and villas globally using our
            exclusive payment solutions.
          </p>
        </div>

        <div className="w-full rounded-[8px] bg-white p-3 flex flex-col gap-4">
          {/* Search Bar */}
          <div className="w-full flex bg-[#F1F1F1] my-2 items-center p-2 gap-2 rounded-[16px]">
            <Image src={A} alt="Search icon" width={20} height={20} />
            <input
              className="w-full outline-none placeholder-[#A3A3A3] text-[15px] bg-[#F1F1F1]"
              type="search"
              placeholder="Search coin"
            />
          </div>

          {/* Premium Payment Methods */}
          <div className="w-full border border-[#E7E7E7] p-3">
            <h2 className="text-[#2C2C2C] text-[17px] md:text-[20px] font-medium">
              Premium Payment Methods
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-3 gap-3">
              {[
                { img: E, text: "BinancePay" },
                { img: F, text: "Google Pay", extraImg: B },
                { img: G, text: "Credit/Debit Card" },
                { img: A, text: "WeChatPay" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 border border-[#E7E7E7] rounded-[8px]"
                >
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={24}
                    height={24}
                  />
                  {item.extraImg && (
                    <Image
                      src={item.extraImg}
                      alt="Google Pay Logo"
                      width={60}
                      height={25}
                    />
                  )}
                  <p className="text-[#2C2C2C] text-[14px] md:text-[16px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stable Coins */}
          <div className="w-full border border-[#E7E7E7] p-3">
            <h2 className="text-[#2C2C2C] text-[17px] md:text-[20px] font-medium">
              Stable Coins
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-3 gap-3">
              {[
                { img: A, text: "USDT" },
                { img: B, text: "DAI" },
                { img: C, text: "USDC" },
                { img: D, text: "True USD" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 border border-[#E7E7E7] rounded-[8px]"
                >
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={25}
                    height={25}
                  />
                  <p className="text-[#2C2C2C] text-[14px] md:text-[16px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cryptocurrencies */}
          <div className="w-full border border-[#E7E7E7] p-3">
            <h2 className="text-[#2C2C2C] text-[17px] md:text-[20px] font-medium">
              Cryptocurrencies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-3 gap-3">
              {coins.map((coin) => (
                <div
                  key={coin.uuid}
                  className="flex items-center gap-2 p-2 border border-[#E7E7E7] rounded-[8px]"
                >
                  <Image
                    src={coin.iconUrl}
                    alt={coin.name}
                    width={25}
                    height={25}
                  />
                  <p className="text-[#2C2C2C] text-[14px] md:text-[16px]">
                    {coin.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsList;
