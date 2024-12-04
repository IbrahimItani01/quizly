import { createContext, useState } from "react";
import { mockUsers } from "../mock/users";

export const userContext = createContext();

const UserProvider = ({children})=>{
    const [user,setUser] = useState(mockUsers[0]);
    return(
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider