"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiEye, HiEyeOff, HiChevronDown, HiChevronUp } from "react-icons/hi";
import OTPVerification from "./OTPVerificationModal";

type PasswordFormInputs = z.infer<typeof passwordSchema>;

const passwordSchema = z
  .object({
    oldPassword: z.string().min(6, "Old password is required"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormInputs>({
    resolver: zodResolver(passwordSchema),
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false); 

  const togglePasswordVisibility = (field: "old" | "new" | "confirm") => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle password change
  const onSubmit = async (data: PasswordFormInputs) => {
    console.log("Password changed:", data);
    setTimeout(() => {
      setShowOtpModal(true);
    }, 1000);
  };

  return (
    <div className="w-full flex bg-gray-100">
      {" "}
      {/* ✅ Full-screen background */}
      {showOtpModal && (
        <OTPVerification
          email=""
          onClose={() => setShowOtpModal(false)} // ✅ Close modal when OTP is canceled
          onSuccess={() => {
            console.log("OTP Verified! Proceed to next step");
            setShowOtpModal(false); // ✅ Ensure modal closes on success
          }}
        />
      )}
      <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto">
        <h1
          className="text-lg text-[#2C2C2C] font-medium flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          CHANGE PASSWORD
          <span className="text-[#F05A1B] text-3xl">
            {isOpen ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
          </span>
        </h1>

        {isOpen && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 mt-4 max-w-md"
          >
            {/* Old Password */}
            <div>
              <label className="block text-sm text-[#2C2C2C] font-medium">
                Old password
              </label>
              <div className="relative mt-2">
                <input
                  type={showPassword.old ? "text" : "password"}
                  placeholder="Enter old password"
                  {...register("oldPassword")}
                  className="w-full py-3 p-2 border text-gray-900 rounded-md"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => togglePasswordVisibility("old")}
                >
                  {showPassword.old ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </button>
              </div>
              {errors.oldPassword && (
                <p className="text-red-500 text-sm">
                  {errors.oldPassword.message}
                </p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm text-[#2C2C2C] font-medium">
                New password
              </label>
              <div className="relative mt-2">
                <input
                  type={showPassword.new ? "text" : "password"}
                  placeholder="Enter new password"
                  {...register("newPassword")}
                  className="w-full py-3 p-2 border text-gray-900 rounded-md"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => togglePasswordVisibility("new")}
                >
                  {showPassword.new ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-[#2C2C2C] font-medium">
                Confirm password
              </label>
              <div className="relative mt-2">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  placeholder="Re-enter new password"
                  {...register("confirmPassword")}
                  className="w-full py-3 p-2 border text-gray-900 rounded-md"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  {showPassword.confirm ? (
                    <HiEyeOff size={20} />
                  ) : (
                    <HiEye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F05A1B] text-base py-3 font-medium text-white p-2 rounded-md hover:bg-orange-600 transition"
            >
              Change Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
