import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi"
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2"
import { useConversation } from "./useConversation";
import { ROUTES } from "@/shared/constants/routes";

export const useRoutes = () => {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(() => [
    {
      label: 'Chat',
      href: ROUTES.CONVERSATIONS,
      icon: HiChat,
      active: pathname === ROUTES.CONVERSATIONS || !!conversationId,
    },
    {
      label: 'Users',
      href: ROUTES.USERS,
      icon: HiUsers,
      active: pathname === ROUTES.USERS,
    },
  ], [pathname, conversationId])

  return routes
}