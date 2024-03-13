"use client";

import { FullConversationType } from "./types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useConversation } from "@/shared/libs/use-conversation";
import clsx from "clsx";
import { MdOutlineGroupAdd } from "react-icons/md";
import { ConversationBox } from "./_ui/conversation-box";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

export const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();
  const { conversationId, isOpen } = useConversation();

  return (
    <aside className={ clsx(
        `fixed
        top-[56px]
        bottom-0
        inset-y-4
        pb-20
        lg:pb-0
        lg:w-80
        lg:block
        overflow-y-auto
        border-r
        border-gray-300
        dark:border-gray-700
        block w-full left-0`,
        isOpen ? "hidden" : "block w-full left-0"
      )}>

      <div className="px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-300">
            Чати
          </div>
          <div className="rounded-full p-2 bg-gray-200 dark:bg-gray-800 text-neutral-800 
          cursor-pointer hover:opacity-75 transition dark:text-neutral-300">
            <MdOutlineGroupAdd size={24} />
          </div>
        </div>
        <div>
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId === item.id}
            />
          ))}
        </div>
      </div>
      
    </aside>
  );
}