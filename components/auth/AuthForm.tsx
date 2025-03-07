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
import { login } from "@/app/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";

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
  const dispatch: AppDispatch = useDispatch();
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
        const userData = response.data.data.user || {};
        const token = response.data.data.token;
        const formattedUser = {
          _id: userData._id,
          username: userData.username,
          fullName: userData.fullName,
          email: userData.email,
          role: userData.role,
          profilePicture: userData.profilePicture || "",
          isBlocked: userData.isBlocked,
          emailNotification: userData.emailNotification,
          twoFa: userData.twoFa,
          title: userData.title || "",
          gender: userData.gender || "",
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          middleName: userData.middleName || "",
          phoneNumber: userData.phoneNumber || "",
          nationality: userData.nationality || "",
          birthPlace: userData.birthPlace || "",
          issuanceDate: userData.issuanceDate || "",
          state: userData.state || "",
          city: userData.city || "",
          zipcode: userData.zipcode || "",
          houseNo: userData.houseNo || "",
          houseAddress: userData.houseAddress || "",
          documenttype: userData.documenttype || "",
          issuedby: userData.issuedby || "",
          passportNo: userData.passportNo || "",
          passportExpiryDate: userData.passportExpiryDate || "",
          dateOfBirth: userData.dateOfBirth || "",
        };

        console.log("Formatted User Data for Redux:", formattedUser);
        console.log("Extracted Token:", token);
        localStorage.setItem("user", JSON.stringify(formattedUser));
        localStorage.setItem("token", token);

        dispatch(login({ token, user: formattedUser }));

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
