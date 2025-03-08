"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import SuccessModal from "./SuccessModal";

interface ResetPasswordModalProps {
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ password: string; confirmPassword: string }>();

  const onSubmit = async () => {
    setLoading(true);
    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Password reset successfully!");
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Something went wrong, Please try again!", error);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!showSuccessModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl pt-10 font-bold text-center text-[#2C2C2C]">
              Reset Password
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
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
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

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
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}

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
      ) : (
        <SuccessModal
          mode="register"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </>
  );
};
export default ResetPasswordModal;
