import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export const useSocialAction = () => {
  
const [isSocialLauding, setIsSocialLauding] = useState(false);

const socialAction = (action: string) => {
  setIsSocialLauding(true);
  signIn(action, { redirect: false })
  .then((callback) => {
    if(callback?.error) {
      toast.error("Недійсні облікові дані")
    }
    if(callback?.ok && !callback.error) {
      toast.success("Увійшли в систему")
    }
  })
  .finally(() => setIsSocialLauding(false))
};

return {
  isSocialLauding,
  socialAction,
}

}

