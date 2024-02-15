import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi"
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2"
import { useConversation } from "./useConversation";
import { API_ROUTES } from "@/shared/constants/api-routes";

export const useRoutes = () => {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(() => [
    {
      label: 'Chat',
      href: API_ROUTES.CONVERSATIONS,
      icon: HiChat,
      active: pathname === API_ROUTES.CONVERSATIONS || !!conversationId,
    },
    {
      label: 'Users',
      href: API_ROUTES.USERS,
      icon: HiUsers,
      active: pathname === API_ROUTES.USERS,
    },
  ], [pathname, conversationId])

  return routes
}