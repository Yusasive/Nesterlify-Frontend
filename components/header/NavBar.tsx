"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const userNavLinks = [
  { name: "Profile", href: "/profile" },
  { name: "Account Settings", href: "/account-settings" },
  { name: "Logout", href: "/logout" },
];

export default function UserNav() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="relative flex md:hidden">
      <button
        className="text-gray-600"
        onClick={() => setUserMenuOpen(!userMenuOpen)}
      >
        <HiMenu size={28} />
      </button>
      {userMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
          {userNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setUserMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
