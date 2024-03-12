import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi"
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2"
import { useConversation } from "@/shared/libs/use-conversation";
import { ROUTES } from "@/shared/constants/routes";

export const useRoutes = () => {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(() => [
    {
      label: 'Чати',
      href: ROUTES.CONVERSATIONS,
      icon: HiChat,
      active: pathname === ROUTES.CONVERSATIONS || !!conversationId,
    },
    {
      label: 'Абоненти',
      href: ROUTES.USERS,
      icon: HiUsers,
      active: pathname === ROUTES.USERS,
    },
  ], [pathname, conversationId])

  return routes
}