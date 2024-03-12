"use client";

import clsx from "clsx";
import { useConversation } from "@/shared/libs/use-conversation";
import { EmptyState } from "@/shared/ui/empty-state";
// import { ConversationList } from "@/features/conversation/conversation-list";
// import { getConversations } from "@/entities/actions/get-conversations.server";

const Home = () => {
  const { isOpen } = useConversation();
  // const conversation = await getConversations();

  return (
    <div>
      {/* <ConversationList initialItems={conversation}/> */}
      <div className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}>
        <EmptyState />
      </div>
    </div>
    
  )
}

export default Home;