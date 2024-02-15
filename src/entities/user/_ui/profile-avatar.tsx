import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Profile } from "../_domain/types";
import { cn } from "@/shared/utils/utils";
import { getProfileLetters } from "../_model/get-profile-letters";

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  return (
    <div className="relative">
      <Avatar className={cn(className)}>
        <AvatarImage src={profile.image ?? ""} className="object-cover" />
        <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
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