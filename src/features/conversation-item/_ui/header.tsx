"use client";

import { useOtherUser } from "@/features/conversation/_model/use-other-user";
import { ROUTES } from "@/shared/constants/routes";
import { UserAvatar } from "@/shared/ui/user-avatar/user-avatar";
import { Conversation, User } from "@prisma/client";
import { log } from "console";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";

interface HeaderProps {
  conversation: Conversation & { users: User[] };
}
export const Header: React.FC<HeaderProps> = ({ conversation }) => {

  const otherUser = useOtherUser(conversation);
  const statusText = useMemo(() => {
    if(conversation.isGroup) {
      let members = 'абонентів';
      if(conversation.users.length > 2 && conversation.users.length <= 4) {
        members = 'абоненти';
      }
      return `${conversation.users.length} ${members}`;
    }

    return 'Активний';
  }, [conversation]);
    
  return (
    <div className=" w-full flex justify-between items-center border-b-[1px] px-4 py-3 sm:px-4 sm:py-6 lg:px-6 lg:py-6 shadow-sm">
      <div className="flex gap-3 items-center">
        <Link 
          className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
          href={ROUTES.CONVERSATIONS}
        >
          <HiChevronLeft size={32} />
        </Link>
        <UserAvatar image={otherUser?.image} name={otherUser?.name} email={otherUser?.email} />
        <div className="flex flex-col">
          <div>
            {conversation.name || otherUser?.name}
          </div>
          <div className="text-sm font-light text-green-700 dark:text-green-400 opacity-80">
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal size={32} onClick={() => {}} className="text-sky-500 hover:text-sky-600 transition cursor-pointer" />
    </div>
  );
};