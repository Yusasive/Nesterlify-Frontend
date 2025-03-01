import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { UseFormRegisterReturn } from "react-hook-form";

interface PasswordFieldProps {
  label: string;
  register: UseFormRegisterReturn; // Change the type to match the expected object structure
  error?: string;
}

export default function PasswordField({
  label,
  register,
  error,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="text-[#2C2C2C] text-sm font-medium">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register}
          className="w-full px-4 py-2 border text-gray-800 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-4 flex items-center text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
