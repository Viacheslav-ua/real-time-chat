"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { AuthVariant } from "./use-toggle-auth-variant";
import { useRouter } from "next/navigation";
import { API_ROUTES } from "@/shared/constants/api-routes";

const authFormSchema = z.object({
  name: z.string(),
  email: z.coerce.string().email().min(5),
  password: z
    .string()
    .min(3, {
      message: "Пароль повинен бути більше 2-х символів.",
    })
    .max(50, {
      message: "Пароль не повинен бути більше 50-ти символів.",
    }),
});

export const useAuthForm = (variant: AuthVariant) => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit = (data: z.infer<typeof authFormSchema>) => {
    setIsFormLoading(true);
    if (variant === "REGISTER") {
      axios
        .post(API_ROUTES.REGISTER, data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("something went wrong"))
        .finally(() => setIsFormLoading(false));
    }
    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Недійсні облікові дані");
            form.setValue("password", "");
          }
          if (callback?.ok && !callback.error) {
            toast.success("Увійшли в систему");
          }
        })
        .finally(() => setIsFormLoading(false));
    }
  };

  return {
    form,
    onFormSubmit,
    isFormLoading,
  };
};
