"use client";

import { API_ROUTES } from "@/shared/constants/api-routes";
import { ROUTES } from "@/shared/constants/routes";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const UserBox = ({ data }: { data: User }) => {

  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleClick = useCallback(() => {
    setIsPending(true);

    axios.post(API_ROUTES.CONVERSATIONS, {
      userId: data.id,
    })
      .then((data) => {
        router.push(ROUTES.CONVERSATIONS_ID + data.data.id)
      })
      .finally(() => setIsPending(false))
  }, [data, router]);

  return (
    <div onClick={handleClick} className="
      w-full
      cursor-pointer
      relative
      flex
      items-center
      space-x-3
      bg-white
      p-3
      hover:bg-neutral-100
      dark:bg-neutral-800
      dark:hover:bg-neutral-700
      rounded-lg
      transition
    ">
      
    </div>
  )
}