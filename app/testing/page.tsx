"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

interface ResetPasswordModalProps {
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ password: string; confirmPassword: string }>();

  const onSubmit = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Password reset successfully!");
      onClose(); // Close modal after success
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl pt-10 font-bold text-center text-[#2C2C2C]">
          Reset Password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* New Password */}
          <label className="block text-sm font-medium text-[#2C2C2C]">
            New password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Enter your new password"
            className="w-full mt-2 px-4 py-2 border text-gray-900 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          {/* Confirm New Password */}
          <label className="block text-sm font-medium text-[#2C2C2C] mt-3">
            Confirm new password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            placeholder="Re-enter your new password"
            className="w-full mt-2 px-4 py-2 border text-gray-900 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full py-2 bg-[#F05A1B] text-white rounded-lg font-semibold hover:bg-orange-600 transition flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin w-5 h-5 mr-2" />
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
