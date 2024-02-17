"use client";

import { User } from "@prisma/client";
import { UserBox } from "./_ui/user-box";

interface UserListProps {
  items: User[];
}

export const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside className="
      fixed
      top-[56px]
      bottom-0
      inset-y-4
      pb-20
      lg:pb-0
      
      lg:w-80
      lg:block
      overflow-y-auto
      border-r
      border-gray-300
      dark:border-gray-700
      block w-full left-0

    ">
      <div className="px-5">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-300 py-4">
            Користувачі
          </div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
}