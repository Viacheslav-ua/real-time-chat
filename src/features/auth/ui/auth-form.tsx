"use client"


import { Button } from "@/shared/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Loader } from "lucide-react"
import { PiSignInFill } from "react-icons/pi";

type AuthVariant = 'LOGIN' | 'REGISTER'

const authFormSchema = z.object({
  name: z.string(),
  email: z.coerce.string().email().min(5),
  password: z.string().min(3, {
    message: "Пароль повинен бути більше 2-х символів.",
  }).max(50, {
    message: "Пароль не повинен бути більше 50-ти символів.",
  }),
});

export const AuthForm = () => {

  const [variant, setVariant] = useState<AuthVariant>('LOGIN')
  const [isLauding, setIsLauding] = useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
      return
    }
    setVariant('LOGIN')
  }, [variant])

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
      name: '',
      email: '',
      password: '',
    },
  });

  // const onSubmit: SubmitHandler<FieldValues> = (values: z.infer<typeof authFormSchema>) => {
  const onSubmit = (data: z.infer<typeof authFormSchema>) => {
    setIsLauding(true)
    if (variant === 'REGISTER') {
      // axios register
    }
    if (variant === 'LOGIN') {
      // next auth sign-in
    }
    console.log(data);

  }

  const socialAction = (action: string) => {
    setIsLauding(true)
    // next auth social sign in
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between gap-4">
                <FormLabel>І'мя</FormLabel>
                <FormControl>
                  <Input placeholder="І'мя..." {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between gap-4">
                <FormLabel>Е-пошта</FormLabel>
                <FormControl>
                  <Input placeholder="Електронна пошта..." {...field} />
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
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input placeholder="Пароль..." {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={false}>
          <PiSignInFill className="mr-2 h-4 w-4  animate-spin" />
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Увійти
        </Button>
      </form>
    </Form>
  )
}