"use client";
import React, { useEffect } from "react";
import { useGlobalState } from "@/app/globalContext/globalContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isUserLogin } = useGlobalState();
  console.log(isUserLogin, "user ");
  const router = useRouter();

  useEffect(() => {
    if (!isUserLogin) {
      router.push("/");
    }
  }, [isUserLogin, router]);

  if (isUserLogin) {
    return <>{children}</>;
  }

  return null;
};

export default ProtectedRoute;
