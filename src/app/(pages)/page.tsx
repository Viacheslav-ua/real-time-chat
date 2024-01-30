import { AuthForm } from "@/features/auth/auth-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center">
          <h1 className="text-sky-500">Flow</h1>
          <Image
            src={"/images/logo.png"}
            priority={false}
            alt="Logo"
            height="50"
            width="50"
            // className="mx-auto w-auto"
          />
          <h1 className="text-sky-500">Chat</h1>
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
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
