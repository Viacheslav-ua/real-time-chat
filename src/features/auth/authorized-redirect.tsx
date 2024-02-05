"use client";

import { useAppSession } from "@/entities/user/session";
import { ROUTES } from "@/shared/constants/routes";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthorizedRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useAppSession();
  const router = useRouter();

  const isAuthenticated = session.status === "authenticated";

  useEffect(() => {
    if (isAuthenticated) {
      router.push(ROUTES.USERS);
    }
  }, [isAuthenticated]);

  const isLoading =
    session.status === "loading" || session.status === "authenticated";

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === "unauthenticated" && children}
    </>
  );
}
