import prisma from "@/shared/libs/prismadb";
import type { User } from "@prisma/client";

import { getAppSessionServer } from "./get-app-session.server"; 

export const getUsers = async () => {
  const session = await getAppSessionServer();

  if (!session?.user?.email) {
    return [];
  }

  try {
    
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email,
        }
      }
    })

    return users
    
  } catch (error: any) {
    return [];
  }
    
  }