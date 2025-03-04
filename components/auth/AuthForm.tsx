import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Button from "@/components/resuable/Button";
import axios from "axios";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import OtpVerification from "@/app/auth/OTPModal";
import { useRouter } from "next/navigation";
import { AuthResponse } from "@/types/auth";

interface AuthFormProps {
  isLogin: boolean;
}

interface AuthFormInputs {
  fullName?: string;
  username?: string;
  email?: string;
  emailOrUsername?: string;
  password: string;
  confirmPassword?: string;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormInputs>();

  const onSubmit = async (data: AuthFormInputs) => {
    setLoading(true);

    try {
      const url = isLogin
        ? "/api/auth?authType=signin"
        : "/api/auth?authType=signup";

      const payload = isLogin
        ? { emailOrUsername: data.emailOrUsername, password: data.password }
        : {
            fullName: data.fullName,
            username: data.username,
            email: data.email,
            password: data.password,
          };

      const response = await axios.post<AuthResponse>(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Full API Response:", response);

      toast.success(
        isLogin ? "Login successful!" : "Signup successful! Check your email."
      );

      if (isLogin && response.data.data?.token) {
        console.log("Login successful, saving token...");
        localStorage.setItem("token", response.data.data.token);
        toast.success("Redirecting to dashboard...");
        router.push("/user-dashboard");
      } else if (!isLogin) {
        console.log("Signup successful, opening OTP modal...");
        setRegisteredEmail(data.email ?? "");
        setShowOtpModal(true);
      }
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";

      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof error.response === "object" &&
        error.response !== null &&
        "data" in error.response &&
        typeof error.response.data === "object" &&
        error.response.data !== null &&
        "message" in error.response.data &&
        typeof error.response.data.message === "string"
      ) {
        errorMessage = error.response.data.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error("Auth Error:", errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!showOtpModal ? (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {isLogin ? (
            <InputField
              label="Email/Username"
              type="text"
              placeholder="Enter email or username"
              register={register("emailOrUsername", {
                required: "Email or username is required",
              })}
              error={errors.emailOrUsername?.message}
            />
          ) : (
            <>
              <InputField
                label="Full Name"
                type="text"
                placeholder="Enter full name"
                register={register("fullName", {
                  required: "Full name is required",
                })}
                error={errors.fullName?.message}
              />
              <InputField
                label="Username"
                type="text"
                placeholder="Enter username"
                register={register("username", {
                  required: "Username is required",
                })}
                error={errors.username?.message}
              />
              <InputField
                label="Email"
                type="email"
                placeholder="Enter email"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                error={errors.email?.message}
              />
            </>
          )}

          <PasswordField
            label="Password"
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password?.message}
          />

          {!isLogin && (
            <PasswordField
              label="Confirm Password"
              register={register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => {
                  const password = watch("password");
                  return password === value || "Passwords do not match";
                },
              })}
              error={errors.confirmPassword?.message}
            />
          )}

          <Button
            variant="primary"
            className="w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : isLogin ? (
              "Log in"
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      ) : (
        <OtpVerification mode="register" email={registeredEmail} />
      )}
    </>
  );
}
