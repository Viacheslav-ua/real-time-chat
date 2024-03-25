import { Header } from "./_ui/header";
import { Body } from "./_ui/body";
import { Form } from "./_ui/form";
import { Conversation, Message, User } from "@prisma/client";
import { FullMessageType } from "../conversation/types";

export const ConversationItem = async ({ conversation, messages }: {
  conversation: Conversation & { users: User[] },
  messages: FullMessageType[],
}) => {
 
  return (
    <div className="h-full flex flex-col">
      <Header conversation={conversation} />
      <Body />
      <Form />
    </div>
  )
}