"use client";

import { API_ROUTES } from "@/shared/constants/api-routes";
import { useConversation } from "@/shared/libs/use-conversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto, HiPaperAirplane } from "react-icons/hi2";
import { MessageInput } from "./message-input";

export const Form = () => {

  const  { conversationId } = useConversation();
  const {register, handleSubmit, setValue, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', {shouldValidate: true});
    axios.post(API_ROUTES.MESSAGES, {
      ...data,
      conversationId,
    })
  }

  return (
    <div className="py-4 px-4 border-t flex items-center gap-2 lg:gap-4 w-full">
      <HiPhoto size={30} className="text-sky-500"/>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center gap-2 lg:gap-4"
      >
        <MessageInput
          id="message"
          errors={errors}
          register={register}
          required
          placeholder="Повідомлення"
        />
        <button type="submit" className="bg-sky-500 hover:bg-sky-600 
          rounded-full p-2 transition cursor-pointer"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
}