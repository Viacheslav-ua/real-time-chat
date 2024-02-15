import prisma from "@/shared/libs/prismadb";
import { getAppSessionServer } from "./get-app-session.server";

export const getCurrentUser = async () => {
  try {
    const session = await getAppSessionServer();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};