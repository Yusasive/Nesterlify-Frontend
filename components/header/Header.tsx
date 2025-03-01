"use client";

import { useState, useEffect, JSX } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../resuable/Button";
import AuthModal from "@/app/auth/AuthModal";
import currencyCodes from "currency-codes";
import {
  FaDollarSign,
  FaEuroSign,
  FaPoundSign,
  FaYenSign,
} from "react-icons/fa";

const navLinks = [
  { name: "Air Travels", href: "/air-travels" },
  { name: "Hotels", href: "/hotels" },
  { name: "Cars", href: "/cars" },
  { name: "Vacations", href: "/vacations" },
  { name: "Tracking", href: "/tracking" },
];

const fiatIcons: Record<string, JSX.Element> = {
  USD: <FaDollarSign />,
  EUR: <FaEuroSign />,
  GBP: <FaPoundSign />,
  JPY: <FaYenSign />,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [selectedFiat, setSelectedFiat] = useState<{
    code: string;
    icon: JSX.Element;
  }>({
    code: "USD",
    icon: <FaDollarSign />,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const getCurrencyIcon = (code: string) => fiatIcons[code] || <FaDollarSign />; // Default icon

  const fiats = currencyCodes.data.map((currency) => ({
    code: currency.code,
    icon: getCurrencyIcon(currency.code),
  }));

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between py-4 px-2 md:px-32">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src={Logo} alt="NesterlifyLogo" width={180} height={42} />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[#2C2C2C] text-base hover:text-orange-500 font-medium ${
                    pathname === link.href ? "font-medium text-orange-500" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Fiat Currency Dropdown */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 border p-2 rounded cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-[#2C2C2C] text-base font-medium">
                {selectedFiat.icon}
              </span>
              <span className="text-[#2C2C2C] text-lg font-medium">
                {selectedFiat.code}
              </span>
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-50">
                {fiats.map((fiat) => (
                  <div
                    key={fiat.code}
                    className="p-2 flex items-center space-x-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => {
                      setSelectedFiat(fiat);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="text-[#2C2C2C] text-base font-medium">
                      {fiat.icon}
                    </span>
                    <span className="text-[#2C2C2C] text-lg font-medium">
                      {fiat.code}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setAuthOpen(true)}
            >
              Sign in
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setAuthOpen(true)}
            >
              Sign up
            </Button>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="mt-4 flex flex-col items-center space-y-3">
              <button
                className="border border-orange-500 px-4 py-2 rounded text-orange-500 hover:bg-orange-500 hover:text-white"
                onClick={() => setAuthOpen(true)}
              >
                Sign in
              </button>
              <button
                className="bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-600"
                onClick={() => setAuthOpen(true)}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
