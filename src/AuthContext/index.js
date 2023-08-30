'use client'
import { createContext, useState,useEffect } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [authToken,setAuthToken] = useState(()=> typeof window !== 'undefined' && window.localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
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
        setAuthToken(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("token", JSON.stringify(data));
        router.push('/')
      }
    } catch (error) {
      console.log("LOGIN ERROR ",error);
      setResponseMessage(error.response.data.detail);
    }
  };

  // LOGOUT USER
  const logoutUser = ()=>{
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('token');
    router.push('/login')
  }


  // REFRESH TOKEN
  const refreshToken = async()=>{
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + 'token/refresh/',{
      refresh: authToken.refresh
    })

    if(response.status === 200){
      const data = response.data;
      console.log("REFRESH RESPONSE ", data);
      setAuthToken(data)
      setUser(jwtDecode(data.access));
      localStorage.setItem("token", JSON.stringify(data));
    }else{
      logoutUser();
    }
  }



  // REFRESH TOKEN BASED ON EXPIRATION TIME FROM THE REFRESH TOKEN
  useEffect(() => {
    const refreshTokenWhenExpired = async () => {
      if (authToken && authToken.access) {
        const accessToken = jwtDecode(authToken.access);
        const expirationTime = accessToken.exp * 1000; // Convert to milliseconds
        const currentTime = new Date().getTime();
        const timeUntilExpiration = expirationTime - currentTime;
  
        if (timeUntilExpiration <= 0) {
          await refreshToken();
          console.log('CALLING REFRESH TOKEN');
        }
      }
    };
  
    const interval = setInterval(refreshTokenWhenExpired, 1000); // Check every second
    return () => clearInterval(interval);
  }, [authToken]);
  


  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    responseMessage: responseMessage,
    user: user
  }

  return <userContext.Provider value={contextData}>{children}</userContext.Provider>;
};
