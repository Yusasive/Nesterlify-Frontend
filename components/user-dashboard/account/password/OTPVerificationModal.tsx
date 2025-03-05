"use client";

import { useState, useEffect } from "react";
import OtpInput from "@/components/auth/OtpInput";
import { Loader2, X } from "lucide-react";
import { toast } from "react-hot-toast";

interface OtpVerificationProps {
  email: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function OtpVerificationModal({
  email,
  onClose,
  onSuccess,
}: OtpVerificationProps) {
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleOtpComplete = async (otp: string) => {
    setLoading(true);

    try {
      // Simulated API call to verify OTP
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (otp === "123456") {
            resolve("OTP Verified");
          } else {
            reject(new Error("Invalid OTP"));
          }
        }, 1500);
      });

      console.log(result);
      toast.success("OTP Verified Successfully!");

      onSuccess();
      onClose();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    setTimer(30);
    setIsResendDisabled(true);
    toast.success("OTP Resent Successfully!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[400px] text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl text-[#2C2C2C] font-bold">
          Verify Your Identity
        </h2>
        <p className="text-sm mt-2 text-[#7F7F7F]">
          Enter the 6-digit code sent to {email}
        </p>

        <div className="mt-6 py-6">
          <OtpInput length={6} onComplete={handleOtpComplete} />
        </div>

        <button
          onClick={() => handleOtpComplete("")}
          disabled={loading}
          className="w-full mt-6 py-3 bg-[#F05A1B] text-white rounded-xl text-lg font-semibold hover:bg-orange-600 transition disabled:opacity-70 flex justify-center items-center"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit"}
        </button>

        <p className="mt-4 text-[#4B4B4B] text-left">
          Resend code in{" "}
          {isResendDisabled ? (
            <span className="text-[#5A1BF0] font-semibold">{timer} sec</span>
          ) : (
            <button
              className="text-[#5A1BF0] font-semibold"
              onClick={handleResendOtp}
            >
              Resend
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
