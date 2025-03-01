import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn; 
  placeholder: string;
  error?: string; 
}

export default function InputField({
  label,
  type,
  register,
  placeholder,
  error,
}: InputFieldProps) {
  return (
    <div>
      <label className="text-[#2C2C2C] text-sm font-medium">{label}</label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
