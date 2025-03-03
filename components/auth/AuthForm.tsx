import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Button from "@/components/resuable/Button";
import axios from "axios";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import OtpVerification from "@/app/auth/OTPModal";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  isLogin: boolean;
  onClose: () => void;
}

interface AuthFormInputs {
  fullName?: string;
  username?: string;
  email?: string;
  emailOrUsername?: string;
  password: string;
  confirmPassword?: string;
}

export default function AuthForm({ isLogin, onClose }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormInputs>();

  const router = useRouter();

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

      const response = await axios.post<{
        token?: string;
        message?: string;
        requiresOtp?: boolean;
      }>(url, payload, { headers: { "Content-Type": "application/json" } });

      console.log("API Response:", response.data);
      toast.success(
        isLogin ? "Login successful!" : "Signup successful! Check your email."
      );

      if (isLogin && response.data.token) {
        console.log("Login successful, saving token...");
        localStorage.setItem("token", response.data.token);
        setAuthenticated(true);
      } else if (!isLogin) {
        console.log("Signup successful, opening OTP modal...");
        setRegisteredEmail(data.email ?? "");
        setShowOtpModal(true);
      }
    } catch (error: any) {
      let errorMessage = "An unexpected error occurred.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      console.error("Auth Error:", errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      console.log("Redirecting to dashboard...");
      router.push("/dashboard");
    }
  }, [authenticated]);

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
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
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
