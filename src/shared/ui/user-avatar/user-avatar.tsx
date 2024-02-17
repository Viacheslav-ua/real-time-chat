import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { cn } from "@/shared/utils/utils";
import { getUserLetters } from "./get-user-letters";

interface UserAvatarProps {
  image?: string | null;
  name?: string | null;
  email: string | null;
  className?: string;
}
export const UserAvatar: React.FC<UserAvatarProps> = ({
  image,
  name,
  email,
  className,
}) => {
  if (!email) {
    return null;
  }

  return (
    <div className="relative">
      <Avatar className={cn(className)}>
        <AvatarImage src={image ?? ""} className="object-cover" />
        <AvatarFallback>{getUserLetters(email, name)}</AvatarFallback>
      </Avatar>
      <span className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        dark:ring-white

        ring-sky-500
        top-0
        right-0
        h-1
        w-1
        md:h-2
        md:w-2
      " />
    </div>
  );
};