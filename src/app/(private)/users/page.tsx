import { getUsers } from "@/entities/actions/get-users.server";
import { UserList } from "@/features/users/user-list";
import { EmptyState } from "@/shared/ui/empty-state";

const Users = async () => {

  const users = await getUsers()

  return (
    <div>
      <UserList items={users} />
      <div className="hidden lg:block lg:pl-80 h-full">
        <EmptyState />
      </div>
    </div>

  );
};

export default Users;
