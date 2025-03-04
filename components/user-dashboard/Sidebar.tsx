"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const userNavLinks = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Profile", href: "/user-dashboard/profile" },
  { name: "Account Settings", href: "/user-dashboard/settings" },
  { name: "Logout", href: "/logout" },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <button
        className="text-white mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      <nav>
        {userNavLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
