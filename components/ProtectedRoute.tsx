"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token && !storedToken) {
      router.replace("/");
    } else {
      setIsChecking(false);
    }
  }, [token, router]);

  if (isChecking) return <p className="text-center mt-10">Loading...</p>;

  return <>{children}</>;
}
