import clsx from "clsx";
"use client"

import { useState } from "react"
import { useRoutes } from "../_model/useRoutes"
import { NavItem } from "./nav-item"

export function Nav() {

  const routes = useRoutes()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
      <ul role="list" className="
          flex
          items-center
          space-x-10
        ">
          {routes.map(item => (
            <NavItem 
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </ul>
      {/* <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/learn"
      >
        Навчання
      </Link> */}
    </nav>
  );
}
