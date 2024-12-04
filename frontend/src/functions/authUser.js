import { toast } from "react-toastify";
import { loginUser, registerUser } from "../apis/users";

export const authUser = (authType, authForm) => {
  if (authType === "login") {
    if (authForm.email && authForm.password) {
      // if (loginUser(authForm)) {
      //   toast.success("Logged in 🎊");
      //   localStorage.setItem("authenticated", "true");
      //   return true;
      // } else {
      //   toast.error("Something went wrong ⛔");
      //   return false;
      // }
      return true;
    } else {
      toast.error("You missed an input 🤭");
    }
  } else {
    if (authForm.name && authForm.email && authForm.password) {
      // if (registerUser(authForm)) {
      //   toast.success("Logged in 🎊");
      //   localStorage.setItem("authenticated", "true");
      //   return true;
      // } else {
      //   toast.error("Something went wrong ⛔");
      //   return false;
      // }
      return true;
    } else {
      toast.error("You missed an input 🤭");
    }
  }
};
