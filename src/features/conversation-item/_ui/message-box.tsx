"use client";

import { useAppSession } from "@/entities/user/session";
import { FullMessageType } from "@/features/conversation/types";
import { UserAvatar } from "@/shared/ui/user-avatar/user-avatar";
import { cn } from "@/shared/utils/utils";

import { format } from 'date-fns';
import Image from "next/image";

interface MessageBoxProps {
  data: FullMessageType;
  isLast: boolean;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {

  const session = useAppSession();
  const isOwn = session?.data?.user?.email === data?.sender?.email;
  
  const seenList = (data?.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(', ');

  const container = cn("flex gap-3 p-4", isOwn && "justify-end");
  const avatar = cn(isOwn && "order-2");
  const body = cn("flex flex-col gap-2", isOwn && "items-end");
  const message = cn(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
    data.image ? "rounded-md p-0" : "rounded-full py-2 px-3", 
  );
  

  return (
    <div className={container}>
      <div className={avatar}>
        <UserAvatar image={data.sender.image} name={data.sender.name} email={data.sender.email} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">
            {data.sender.name}
          </div>
          <div className="text-xs text-gray-400">
            {format(new Date(data.createdAt), 'p')}
          </div>
        </div>
        <div className={message}>
          {
            data.image
              ? (
                <Image
                  src={data.image}
                  alt="Image"
                  width={288}
                  height={288}
                  className="object-cover cursor-pointer hover:scale-110 transition"
                />
              )
              : (
                <div className="break-words">
                  {data.body}
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
}