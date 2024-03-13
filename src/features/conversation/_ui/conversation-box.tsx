"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, User, Message } from "@prisma/client";
import { format } from 'date-fns';
import { useAppSession } from "@/entities/user/session";
// import clsx from "clsx";
import { cn } from "@/shared/utils/utils";
import { FullConversationType } from "../types";
import { useOtherUser } from "../_model/use-other-user";
import { ROUTES } from "@/shared/constants/routes";
import { UserAvatar } from "@/shared/ui/user-avatar/user-avatar";


interface ConversationBoxProps {
  data: FullConversationType,
  selected?: boolean,
}

export const ConversationBox: React.FC<ConversationBoxProps> = ({ data, selected}) => {

  const otherUser = useOtherUser(data);
  otherUser.id
  const session = useAppSession();
  const router = useRouter();

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];
    return messages[messages.length - 1];
  }, [data.messages])

  const userEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email])

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }
    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length > 0
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if(!lastMessage?.image) {
      return 'Надіслано зображення';
    }

    if(lastMessage?.body) {
      return lastMessage.body;
    }

    return 'Почато розмову';
  }, [lastMessage])

  const handleClick = useCallback(() => {
    router.push(ROUTES.CONVERSATIONS_ID + data.id)
  }, [data.id, router])

  return (
    <div onClick={handleClick} 
      className={cn(`w-full relative cursor-pointer 
        flex items-center space-x-3 p-3 hover:bg-neutral-200 dark:hover:bg-neutral-700 
        rounded-lg transition`,
        selected ? 'bg-neutral-100 dark:bg-neutral-600' : '')}
    >
      <UserAvatar image={otherUser.image} name={otherUser.name} email={otherUser.email} />
      <div>
        <div className="w-full flex justify-between items-center">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
            {data.name || otherUser.name}
          </p>
          {lastMessage?.createdAt && (
            <p className="text-xs font-light text-gray-600 dark:text-gray-400">
              {format(new Date(lastMessage.createdAt), 'p')}
            </p>
          )}
        </div>

        <p className={cn(`truncate text-sm text-gray-500 dark:text-gray-400`, 
          hasSeen 
          ? 'text-gray-400' 
          : 'text-black dark:text-white font-medium')}
        >
          {lastMessageText}
        </p>
      </div>
    </div>
  )
}