"use client";

import { Button } from "@/shared/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { PiSignInFill } from "react-icons/pi";
import { cn } from "@/shared/utils/utils";
import { AuthSocialButton } from "./auth-social-button";
import { BsGithub } from "react-icons/bs";

type AuthVariant = "LOGIN" | "REGISTER";

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

export const AuthForm = () => {
  const [variant, setVariant] = useState<AuthVariant>("LOGIN");
  const [isLauding, setIsLauding] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
      return;
    }
    setVariant("LOGIN");
  }, [variant]);

  // const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //   }
  // })

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // const onSubmit: SubmitHandler<FieldValues> = (values: z.infer<typeof authFormSchema>) => {
  const onSubmit = (data: z.infer<typeof authFormSchema>) => {
    setIsLauding(true);
    if (variant === "REGISTER") {
      // axios register
    }
    if (variant === "LOGIN") {
      // next auth sign-in
    }
    console.log(data);
  };

  const socialAction = (action: string) => {
    setIsLauding(true);
    // next auth social sign in
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {variant === "REGISTER" && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-4">
                  <FormLabel className="leading-6 text-gray-900">
                    І'мя
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="leading-6 text-gray-900 focus-visible:ring-sky-600"
                      placeholder="І'мя..."
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between gap-4">
                <FormLabel className="leading-6 text-gray-900">
                  Е-пошта
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    disabled={false}
                    className="leading-6 text-gray-900 focus-visible:ring-sky-600"
                    placeholder="Електронна пошта..."
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between gap-4">
                <FormLabel className="leading-6 text-gray-900">
                  Пароль
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="leading-6 text-gray-900 focus-visible:ring-sky-600"
                    placeholder="Пароль..."
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={false}
          variant="sky"
          size="fullWidth"        >
          <PiSignInFill className={cn('mr-2 h-4 w-4', 'animate-spin')} />
          {variant === 'LOGIN' ? 'Увійти' : 'Зареєструватись'}
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300">

            </div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className=" bg-white px-2 text-gray-500 ">
              Або продовжити з
            </span>
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          <AuthSocialButton onClick={() => console.log()}><BsGithub /></AuthSocialButton>

        </div>
      </div>
    </Form>
  );
};
