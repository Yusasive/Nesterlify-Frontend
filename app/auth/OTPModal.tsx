"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/app/features/auth/authSlice";
import OtpInput from "@/components/auth/OtpInput";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import SuccessModal from "./SuccessModal";
import ResetPasswordModal from "./ResetPasswordModal";

interface OtpVerificationProps {
  mode: "register" | "forgot-password";
  email: string | null;
}

export default function OtpVerification({ mode, email }: OtpVerificationProps) {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleOtpComplete = async (enteredOtp: string) => {
    if (!enteredOtp || enteredOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setOtp(enteredOtp);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          activationCode: enteredOtp,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Invalid OTP");
      }

      toast.success("OTP Verified Successfully!");

      // ✅ Store user data in Redux & local storage
      dispatch(
        login({
          token: data.token,
          user: data.user, // Make sure the API returns full user details
        })
      );

      if (mode === "register") {
        setShowSuccessModal(true);
      } else if (mode === "forgot-password") {
        setShowResetPasswordModal(true);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setTimer(60);
    setIsResendDisabled(true);

    try {
      const response = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to resend OTP");
      }

      toast.success("OTP Resent Successfully!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong!"
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[400px] text-center relative">
        <h2 className="text-2xl text-[#2C2C2C] font-bold">
          Let us verify it’s you
        </h2>
        <p className="text-sm mt-2 text-[#7F7F7F]">
          Enter the 6-digit code sent to{" "}
          <strong>{email || "your email"}</strong>
        </p>

        <div className="mt-6">
          <OtpInput length={6} onComplete={(otp) => setOtp(otp)} />
        </div>

        <button
          onClick={() => handleOtpComplete(otp)}
          disabled={loading || otp.length !== 6}
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

      {showSuccessModal && (
        <SuccessModal
          mode="register"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
      {showResetPasswordModal && (
        <ResetPasswordModal onClose={() => setShowResetPasswordModal(false)} />
      )}
    </div>
  );
}
