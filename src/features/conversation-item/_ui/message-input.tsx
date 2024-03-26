"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}
export const MessageInput: React.FC<MessageInputProps> = ({
  id,
  placeholder,
  type,
  errors,
  register,
  required,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="font-light py-2 px-4 bg-neutral-200 dark:bg-neutral-700
       w-full rounded-full focus:outline-none"
      />
    </div>
  )
}