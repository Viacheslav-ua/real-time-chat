"use client";

import { FullMessageType } from "@/features/conversation/types";
import { useConversation } from "@/shared/libs/use-conversation";
import { useRef, useState } from "react";
import { MessageBox } from "./message-box";

interface BodyProps {
  initialMessages: FullMessageType[];
}
export const Body: React.FC<BodyProps> = ({ initialMessages }) => {

  const [ messages, setMessages ] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { conversationId } = useConversation();

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox key={message.id} data={message} isLast={i === messages.length - 1} />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
    
  );
}