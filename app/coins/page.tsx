"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import {
  SearchIcon,
  Benance,
  GatePay,
  CreditDebit,
  WeChatPay,
  USDT,
  DAI,
  Tron,
  True,
} from "@/components/Icons";

interface Coin {
  uuid: string;
  name: string;
  iconUrl: string;
}

interface CoinApiResponse {
  data: {
    coins: Coin[];
  };
}

// List of allowed cryptocurrencies to display
const allowedCoins = new Set([
  "Bitcoin",
  "Ethereum",
  "Tether USD",
  "BNB",
  "XRP",
  "Solana",
  "USDC",
  "Cardano",
  "Dogecoin",
  "TRON",
  "Chainlink",
  "Polkadot",
  "Litecoin",
  "DAI",
  "SHIB",
  "Bitcoin Cash",
  "Stellar",
  "TrueUSD",
  "Filecoin",
  "Hedera",
  "NEAR Protocol",
  "KAS",
  "VeChain",
  "TUSD",
  "FTM",
  "Basic Attention Token",
  "Decentraland",
  "Tezos",
  "EOS",
  "Gala",
  "XDC Network",
  "Chiliz",
  "ApeCoin",
  "PancakeSwap",
  "PEPE",
  "GateToken",
  "Illuvium",
  "Zil",
  "1INCH",
  "Dash",
  "NEW",
  "QTUM",
  "OCEAN",
  "IoTex",
  "JasmyCoin",
  "SuperFarm",
  "Waves",
  "SXP",
  "Harmony",
  "Stratis",
  "GUSD",
  "ARK",
  "DigiByte",
  "TET",
  "DAO",
  "Seedify.fund",
  "Standard Tokenization Protocol",
  "Cartesi",
  "Bitgert",
  "Chromia",
  "Syscoin",
  "Nano",
  "XYO",
  "VeChain",
  "Aave",
  "Ethereum Classic",
  "Internet Computer (DFINITY)",
  "Uniswap",
  "Stellar",
  "LEO",
  "Wrapped BTC",
]);

const CoinsList = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get<CoinApiResponse>(
          "https://api.coinranking.com/v2/coins",
          {
            headers: {
              "x-access-token": process.env.NEXT_PUBLIC_COINRANKING_API_KEY!,
            },
          }
        );

        console.log("API Response:", response.data);

        const fetchedCoins: Coin[] = response.data?.data?.coins || [];

        console.log(
          "Fetched Coins:",
          fetchedCoins.map((coin) => coin.name)
        );
        console.log("Allowed Coins:", Array.from(allowedCoins));

        const filteredCoins = fetchedCoins.filter((coin) =>
          allowedCoins.has(coin.name)
        );

        setCoins(filteredCoins);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <SearchIcon />
            <input
              className="w-full text-black outline-none placeholder-[#A3A3A3] text-[15px] bg-[#F1F1F1]"
              type="search"
              placeholder="Search coin"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Premium Payment Methods */}
          <div className="w-full border border-[#E7E7E7] p-3">
            <h2 className="text-[#2C2C2C] text-[17px] md:text-[20px] font-medium">
              Premium Payment Methods
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-3 gap-3">
              {[
                { img: <Benance />, text: "BinancePay" },
                { img: <GatePay />, text: "Google Pay" },
                { img: <CreditDebit />, text: "Credit/Debit Card" },
                { img: <WeChatPay />, text: "WeChatPay" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 border border-[#E7E7E7] rounded-[8px]"
                >
                  {item.img}
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
                { img: <USDT />, text: "USDT" },
                { img: <DAI />, text: "DAI" },
                { img: <Tron />, text: "USDC" },
                { img: <True />, text: "True USD" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 border border-[#E7E7E7] rounded-[8px]"
                >
                  {item.img}
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
              {filteredCoins.map((coin) => (
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
