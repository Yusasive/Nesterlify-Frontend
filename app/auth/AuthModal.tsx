"use client";

import { useState } from "react";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import AuthForm from "@/components/auth/AuthForm";
import ForgotPasswordModal from "@/app/auth/ForgotPasswordModal";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-[9999]">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 py-10 relative">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={onClose}
          >
            <HiX size={24} />
          </button>

          <div className="flex justify-center space-x-24 text-base font-medium mb-4">
            <button
              className={isLogin ? "text-[#7F7F7F]" : "text-[#F05A1B]"}
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>
            <button
              className={!isLogin ? "text-[#7F7F7F]" : "text-[#F05A1B]"}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>

          <h2 className="text-center text-lg font-bold text-[#2C2C2C] mb-4">
            {isLogin ? "Welcome back!" : "Create an account"}
          </h2>

          <AuthForm isLogin={isLogin} onClose={onClose} />

          {!isLogin && (
            <p className="text-sm text-[#4B4B4B] mt-2">
              By clicking Sign in you agree with our{" "}
              <Link href="/" className="text-[#F05A1B]">
                terms and condition
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-[#F05A1B]">
                privacy policy
              </Link>
            </p>
          )}

          {isLogin && (
            <p
              className="text-[#5A1BF0] text-sm text-right underline mt-2 cursor-pointer"
              onClick={() => setIsForgotPasswordOpen(true)}
            >
              Forgot password?
            </p>
          )}
        </div>
      </div>

      {isForgotPasswordOpen && (
        <ForgotPasswordModal onClose={() => setIsForgotPasswordOpen(false)} />
      )}
    </>
  );
}
