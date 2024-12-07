import { toast } from "react-toastify";
import { loginUser, registerUser } from "../apis/users";

export const authUser = async (authType, authForm) => {
  try {
    if (authType === "login") {
      if (authForm.email && authForm.password) {
        const response = await loginUser(authForm); // Call login API
        toast.success("Logged in 🎊");
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("token", response.token); // Store token
        return response; // Return user data
      } else {
        toast.error("You missed an input 🤭");
        return null;
      }
    } else if (authType === "register") {
      if (authForm.name && authForm.email && authForm.password) {
        const response = await registerUser(authForm); // Call register API
        toast.success("Account created successfully 🎉");
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("token", response.token); // Store token
        return response; // Return user data
      } else {
        toast.error("You missed an input 🤭");
        return null;
      }
    }
  } catch (error) {
    console.error("Authentication error:", error);
    toast.error("Something went wrong ⛔");
    return null;
  }
};
