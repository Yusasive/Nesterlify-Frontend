import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  isLoading,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none";

  const variantStyles = {
    primary:
      "bg-[#F05A1B] text-white text-base font-medium rounded-lg hover:bg-orange-600",
    secondary:
      "bg-[#FFFFFF] text-[#3F3F3F] text-base font-medium border-[#F05A1B] border-2 rounded-lg hover:bg-gray-100",
    outline:
      "bg-[#F05A1B] text-white text-base font-medium rounded-lg hover:bg-orange-600",
    ghost: "text-gray-800 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-5 py-3",
    md: "px-6 py-3",
    lg: "px-24 py-4",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        isLoading ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        "Loading..."
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
}
