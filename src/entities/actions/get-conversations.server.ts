import prisma from "@/shared/libs/prismadb";
import { getCurrentUser } from "./get-current-user.server";
export const getConversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }
  
  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: 'desc',
      },
      where: {
        userIds: {
          has: currentUser.id,
        }
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          }
        }
      }
    })

    return conversations;
  } catch (error: any) {
    return [];
  }
}
