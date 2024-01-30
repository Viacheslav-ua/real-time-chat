"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/form";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { PiSignInFill } from "react-icons/pi";
import { cn } from "@/shared/utils/utils";
import { AuthSocialButton } from "./_ui/auth-social-button";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useToggleAuthVariant } from "./_model/use-toggle-auth-variant";
import { useAuthForm } from "./_model/use-auth-form";
import { useSocialAction } from "./_model/use-social-action";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";

export const AuthForm = () => {
  const { variant, toggleVariant } = useToggleAuthVariant();
  const { form, isFormLauding, onFormSubmit } = useAuthForm(variant);
  const { isSocialLauding, socialAction } = useSocialAction()
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if(session?.status === 'authenticated') {
      router.push(ROUTES.USERS)
      
    }
  }, [session?.status, router])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
        {variant === "REGISTER" && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-4">
                  <FormLabel className="leading-6 text-gray-900">
                    І&apos;мя
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="leading-6 text-gray-900 focus-visible:ring-sky-600"
                      disabled={isFormLauding || isSocialLauding}
                      placeholder="І&apos;мя..."
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
                    disabled={isFormLauding || isSocialLauding}
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
                    disabled={isFormLauding || isSocialLauding}
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
          disabled={isFormLauding || isSocialLauding}
          variant="sky"
          size="fullWidth"
        >
          <PiSignInFill
            className={cn("mr-2 h-4 w-4", isFormLauding || isSocialLauding && "animate-spin")}
          />
          {variant === "LOGIN" ? "Увійти" : "Зареєструватись"}
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className=" bg-white px-2 text-gray-500 ">
              Або продовжити з
            </span>
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          <AuthSocialButton disabled={isFormLauding || isSocialLauding} onClick={() => socialAction("github")}>
            <BsGithub />
          </AuthSocialButton>
          <AuthSocialButton disabled={isFormLauding || isSocialLauding} onClick={() => socialAction("google")}>
            <BsGoogle />
          </AuthSocialButton>
        </div>
      </div>
      <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
        <div>
          {variant === "LOGIN" ? "Вперше на FlowChat?" : "Вже є аккаунт?"}
        </div>
        <div
          className="underline cursor-pointer text-sky-600 hover:text-sky-700"
          onClick={toggleVariant}
        >
          {variant === "LOGIN" ? "Зареєструватись" : "Увійти"}
        </div>
      </div>
    </Form>
  );
};
