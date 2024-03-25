import { getConversations } from "@/entities/actions/get-conversations.server";
import { ConversationList } from "@/features/conversation/conversation-list";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversation = await getConversations();

  return (
  <div className="h-full">
    <ConversationList initialItems={conversation}/>
    {children}
  </div>
  )
}