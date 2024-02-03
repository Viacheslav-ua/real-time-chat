import { API_ROUTES } from "@/shared/constants/api-routes";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useSignOut() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => signOut({ callbackUrl: API_ROUTES.HOME }),
    onSuccess: async () => {
      router.push(API_ROUTES.SIGN_IN);
    },
  });

  return {
    signOut: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
}