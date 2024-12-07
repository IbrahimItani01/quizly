import { createContext, useState, useEffect } from "react";
import { getUserData, updateUserScore} from "../apis/users";

export const userContext = createContext();

const UserProvider = ({ children, userId }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.token; // Get token from localStorage

    if (token) {
      getUserData(token)
        .then((data) => {
          setUser(data); // Set user data in state
          setIsAuthenticated(true); // Mark user as authenticated
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

export default UserProvider