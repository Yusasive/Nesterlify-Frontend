"use client";

import { useRouter } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

interface SuccessModalProps {
  mode: "register" | "forgot-password";
}

const SuccessModal = ({ mode }: SuccessModalProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    if (mode === "register") {
      router.push("/user-dashboard");
    } else if (mode === "forgot-password") {
      router.push("/login");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center relative">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        <h2 className="text-lg text-[#4B4B4B] font-bold mt-4">
          {mode === "register"
            ? "Congratulations!!!"
            : "Password Reset Successful!"}
        </h2>
        <p className="text-[#4B4B4B] text-[15px] mt-2">
          {mode === "register"
            ? "Congratulations!!!"
            : "You have reset your password successfully"}
        </p>
        <button
          onClick={handleClick}
          disabled={loading}
          className="mt-6 bg-[#F05A1B] text-white px-6 py-2 rounded-lg flex items-center justify-center w-full hover:bg-orange-600 transition disabled:opacity-70"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
