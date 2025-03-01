"use client";

import { useState, useEffect } from "react";
import { HiX, HiEye, HiEyeOff } from "react-icons/hi";
import Button from "../resuable/Button";
import Link from "next/link";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-50">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <HiX size={24} />
        </button>

        <div className="flex justify-center space-x-4 text-lg font-medium mb-4">
          <button
            className={`${isLogin ? "text-orange-500" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>
          <button
            className={`${!isLogin ? "text-orange-500" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>
        </div>

        <h2 className="text-center text-xl font-semibold mb-4">
          {isLogin ? "Welcome back!" : "Create an account"}
        </h2>

        <form className="space-y-4">
          <div>
            <label className="text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </button>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="text-right text-sm">
              <Link href="/" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          )}

          <Button variant="primary" className="w-full">
            {isLogin ? "Log in" : "Sign up"}
          </Button>
        </form>
      </div>
    </div>
  );
}
