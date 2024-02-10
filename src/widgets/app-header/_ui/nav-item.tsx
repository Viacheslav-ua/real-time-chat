"use client"

import clsx from "clsx"
import Link from "next/link"
import { IconType } from "react-icons/lib"

interface NavItemProps {
  label: string
  icon: IconType
  href: string
  active: boolean
}
export const NavItem: React.FC<NavItemProps> = ({
  label, icon: Icon, href, active
}) => {


  return (
    <li className="">
      <Link href={href} className={clsx(
        `
        group
        flex
        gap-x-3
        p-3
        text-sm
        leading-4
        font-semibold
        text-foreground/60
        hover:text-foreground/85
        transition-colors
        `,
        active && "text-foreground/90 hover:text-foreground border-b-2 border-b-foreground/90 cursor-default")}>
        <span className="">{label}</span>
        <Icon className="h-5 w-5 shrink-0"/>
      </Link>
    </li>
  )
}