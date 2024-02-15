"use client"

import { useCallback, useState } from "react";

export type AuthVariant = "LOGIN" | "REGISTER";

export const useToggleAuthVariant = () => {
  const [variant, setVariant] = useState<AuthVariant>("LOGIN");

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
      return;
    }
    setVariant("LOGIN");
  }, [variant]);

  return { variant, toggleVariant };
};
