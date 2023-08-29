import { createContext,useState } from "react";


const authContext = createContext();

export const AuthProvider = ({ children }) =>{
    return(
        <authContext.Provider>
            {children}
        </authContext.Provider>
    )
}