import { toast } from "react-toastify";
import { loginUser, registerUser } from "../apis/users";


export const authUser = (authType, authForm) => {
  if (authType === "login") {
    if (authForm.email && authForm.password) {
                                                      return true;
    } else {
      toast.error("You missed an input 🤭");
    }
  } else {
    if (authForm.name && authForm.email && authForm.password) {
                                                      return true;
    } else {
      toast.error("You missed an input 🤭");
    }
  }
};
