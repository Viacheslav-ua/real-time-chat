import { AuthForm } from "@/features/auth/auth-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200 dark:bg-slate-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center">
          <span className="text-sky-500">Flow</span>
          <Image
            src={"/images/logo.png"}
            priority={false}
            alt="Logo"
            height="50"
            width="50"
          />
          <span className="text-sky-500">Chat</span>
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
          Увійдіть у свій аккаунт
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
