import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios"
import { signIn } from "next-auth/react"
import { toast } from "react-hot-toast";
import { AuthVariant } from "./use-toggle-auth-variant";



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
  const [isFormLauding, setIsFormLauding] = useState(false);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit = (data: z.infer<typeof authFormSchema>) => {
    setIsFormLauding(true);
    if (variant === "REGISTER") {
      axios.post('/api/register', data)
      .catch(() => toast.error("something went wrong"))
      .finally(() => setIsFormLauding(false))
    }
    if (variant === "LOGIN") {
      signIn('credentials', {
        ...data,
        redirect: false,
      })
      .then((callback) => {
        if(callback?.error) {
          toast.error("Недійсні облікові дані")
          form.setValue("password", "")
        }
        if(callback?.ok && !callback.error) {
          toast.success("Увійшли в систему")
        }
      })
      .finally(() => setIsFormLauding(false))
    }
  };

  return {
    form,
    onFormSubmit,
    isFormLauding,
  };
};
