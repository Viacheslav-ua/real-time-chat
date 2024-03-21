import { getConversationById } from "@/entities/actions/get-conversation-by-id.server";
import { getMessages } from "@/entities/actions/get-messages.server";
import { EmptyState } from "@/shared/ui/empty-state";
import { Header } from "./_ui/header";
import { Body } from "./_ui/body";
import { Form } from "./_ui/form";

interface IParams {
  'conversationId': string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
const conversation = await getConversationById(params.conversationId);
const messages = await getMessages(params.conversationId);

if(!conversation) {
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <EmptyState />
      </div>
    </div>
  )
}

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body />
        <Form />
      </div>
    </div>
  )
}

export default ConversationId;