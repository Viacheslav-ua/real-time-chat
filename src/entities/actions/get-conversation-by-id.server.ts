import prisma from "@/shared/libs/prismadb";
import { getCurrentUser } from "./get-current-user.server";

export const getConversationById = async (conversationId: string) => {
  try {
    const currentUser = await getCurrentUser();
    if(!currentUser?.email) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error: any) {
    return null;
  }
}