'use client'
import { createContext, useState,useEffect } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [authToken,setAuthToken] = useState(()=> typeof window !== 'undefined' && window.localStorage.getItem('token') ? localStorage.getItem('token') : null)
  const [user,setUser] = useState(()=> typeof window !== 'undefined' && window.localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null)
  const [responseMessage,setResponseMessage] = useState('')
  

  // login
  const loginUser = async (username,password) => {

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + 'token/', {
        username: username,
        password: password
      });
      if (response.status === 200) {
        const data = response.data;
        console.log("LOGIN RESPONSE ", data);
        setAuthToken(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("token", data);
        router.push('/')
      }
    } catch (error) {
      console.log("LOGIN ERROR ",error);
      setResponseMessage(error);
    }
  };


  let contextData = {
    loginUser: loginUser,
    responseMessage: responseMessage,
    user: user
  }

  return <userContext.Provider value={contextData}>{children}</userContext.Provider>;
};
