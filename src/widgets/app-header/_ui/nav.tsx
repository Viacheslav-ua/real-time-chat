import clsx from "clsx";
"use client"

import { useState } from "react"
import { useRoutes } from "../_model/use-routes"
import { NavItem } from "./nav-item"

export function Nav() {

  const routes = useRoutes()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium">
      <ul role="list" className="
          flex
          flex-col
          md:flex-row
          md:space-x-10
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
    </nav>
  );
}
