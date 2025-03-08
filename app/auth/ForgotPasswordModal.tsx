"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import OtpVerification from "./OTPModal";

interface ForgotPasswordModalProps {
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [email, setEmail] = useState<string>(""); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

 const onSubmit = async (data: { email: string }) => {
   setLoading(true);
   try {
     await new Promise((resolve) => setTimeout(resolve, 2000));

     toast.success("Password reset OTP sent to your email!");
     setEmail(data.email);
     setOtpOpen(true);
   } catch (error) {
     console.error("Something went wrong:", error);
     toast.error("Something went wrong. Please try again!");
   } finally {
     setLoading(false);
   }
 };


  return (
    <>
      {!otpOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl pt-10 font-bold text-center text-[#2C2C2C]">
              Forgot Password
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2C2C2C]"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter your email address"
                className="w-full mt-2 px-4 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-orange-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 w-full py-2 bg-[#F05A1B] text-white rounded-lg font-semibold hover:bg-orange-600 transition flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5 mr-2" />
                ) : (
                  "Next"
                )}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <OtpVerification mode="forgot-password" email={email} />
      )}
    </>
  );
};

export default ForgotPasswordModal;
