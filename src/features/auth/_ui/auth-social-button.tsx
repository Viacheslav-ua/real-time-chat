import { cn } from "@/shared/utils/utils";
import { ButtonHTMLAttributes, FC } from "react";

type AuthSocialButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex w-full justify-center rounded-md bg-white px-4 py-2",
        "text-gray-500 shadow-sm right-1 ring-inset ring-gray-300",
        "hover:bg-gray-100 focus:outline-offset-0",
        className,
      )}
    />
  );
};
