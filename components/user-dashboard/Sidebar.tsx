"use client";

import { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const userNavLinks = [
  { name: "Account", href: "/user-dashboard", icon: <FiUser size={20} /> },
  {
    name: "Notification",
    href: "/user-dashboard/notifcations",
    icon: <FiBell size={20} />,
    badge: 2,
  },
  {
    name: "My bookings",
    href: "/user-dashboard/bookings",
    icon: <FiCreditCard size={20} />,
  },
  { name: "Saved", href: "/user-dashboard/saved", icon: <FiHeart size={20} /> },
  {
    name: "Invite & earn",
    href: "/user-dashboard/invite",
    icon: <FiUsers size={20} />,
  },
  {
    name: "Wallet",
    href: "/user-dashboard/wallet",
    icon: <MdAccountBalanceWallet size={20} />,
  },
  {
    name: "Credits",
    href: "/user-dashboard/credits",
    icon: <FiCreditCard size={20} />,
  },
];

interface User {
  fullName: string;
  profilePicture?: string;
}

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [user, setUser] = useState<User>({
    fullName: "Guest",
    profilePicture: "/profile.jpg",
  });

  const reduxUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser((prev) => ({
        ...prev,
        ...JSON.parse(storedUser),
        profilePicture: JSON.parse(storedUser).profilePicture || "/profile.jpg",
      }));
    } else if (reduxUser) {
      setUser((prev) => ({
        ...prev,
        ...reduxUser,
        profilePicture: reduxUser.profilePicture || "/profile.jpg",
      }));
    }
  }, [reduxUser]);

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("user");
    window.location.href = "/"; 
  };

  return (
    <>
      <aside
        className={`bg-white shadow-md h-screen p-4 transition-all duration-300 md:flex flex-col hidden ${isExpanded ? "w-64" : "w-16"}`}
      >
        {/* Sidebar Toggle */}
        <button
          className="text-gray-900 self-end"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Profile Section */}
        <div className="flex items-center space-x-3 mt-4">
          <Image
            src={user.profilePicture || "/profile.jpg"}
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          {isExpanded && (
            <p className="text-[#2C2C2C] text-base font-medium">
              Good morning, {user.fullName.split(" ")[0] || "Guest"}
            </p>
          )}
        </div>

        {/* Navigation Links */}
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

          {/* Log out button - Triggers modal */}
          <button
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center space-x-3 px-4 py-2 mt-4 text-[#DA1919]"
          >
            <FiLogOut size={20} className="text-[#DA1919]" />
            {isExpanded && <span>Log out</span>}
          </button>
        </nav>
      </aside>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-lg w-[450px] shadow-lg space-y-5 relative">
            <h1 className="text-center text-lg text-[#DA1919] font-medium ">
              Log out
            </h1>
            <h2 className="text-base font-medium text-[#2C2C2C] ">
              Are you sure you want to log out?
            </h2>

            <p className="text-[#7F7F7F] text-base  mt-2">
              Logging out will remove your active session, and you’ll need to
              enter your credentials to log back in.
            </p>

            <div className="flex justify-between gap-3 mt-6">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="w-full py-2 rounded-lg text-base bg-[#FFDBDB] text-[#DA1919] font-medium hover:bg-red-200 transition"
              >
                No, cancel
              </button>
              <button
                onClick={handleLogout}
                className="w-full py-2 rounded-lg bg-[#DA1919] text-[#FFFFFF] text-base font-medium hover:bg-red-700 transition"
              >
                Yes, log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
