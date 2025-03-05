"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FiBell,
  FiUser,
  FiHeart,
  FiCreditCard,
  FiLogOut,
  FiUsers,
} from "react-icons/fi";
import { MdAccountBalanceWallet } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const userNavLinks = [
  { name: "Account", href: "/account", icon: <FiUser size={20} /> },
  {
    name: "Notification",
    href: "/notifications",
    icon: <FiBell size={20} />,
    badge: 2,
  },
  { name: "My bookings", href: "/bookings", icon: <FiCreditCard size={20} /> },
  { name: "Saved", href: "/saved", icon: <FiHeart size={20} /> },
  { name: "Invite & earn", href: "/invite", icon: <FiUsers size={20} /> },
  {
    name: "Wallet",
    href: "/wallet",
    icon: <MdAccountBalanceWallet size={20} />,
  },
  { name: "Credits", href: "/credits", icon: <FiCreditCard size={20} /> },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={`bg-white shadow-md h-100vh p-4 transition-all duration-300 md:flex flex-col hidden  ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <button
        className="text-gray-900 self-end"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      <div className="flex items-center space-x-3 mt-4">
        <Image
          src="/profile.jpg"
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        {isExpanded && (
          <div>
            <p className="text-[#2C2C2C] text-base font-medium">
              Good morning, Miracle
            </p>
          </div>
        )}
      </div>

      <nav className="mt-6 flex-grow space-y-4">
        {userNavLinks.map(({ name, href, icon, badge }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100 transition-all"
          >
            <span className="text-gray-400 text-2xl">{icon}</span>
            {isExpanded && (
              <span className="text-[#2C2C2C] text-base font-medium">
                {name}
              </span>
            )}
            {badge && (
              <span className="ml-[-2] bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {badge}
              </span>
            )}
          </Link>
        ))}

        <button className="bg-[#5A1BF0] text-white py-2 px-4 rounded-lg w-full">
          {isExpanded ? "Connect Wallet" : "🔗"}
        </button>

        <Link
          href="/logout"
          className="flex items-center space-x-3 px-4 py-2 mt-4 text-[#DA1919]"
        >
          <span className="text-[#DA1919] text-base font-medium">
            {" "}
            <FiLogOut size={20} />
          </span>
          {isExpanded && <span>Log out</span>}
        </Link>
      </nav>
    </aside>
  );
}
