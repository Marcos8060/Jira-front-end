'use client'
import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";


const accessToken = typeof window !== "undefined" ? localStorage.getItem('accessToken') : null;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// check if access token is expired
const isAccessTokenExpired = () => {
    
  const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  if (!accessToken) {
    return true;
  }

  const decodedToken = jwt_decode(accessToken);
  // Convert expiration time to milliseconds
  const expirationTime = decodedToken.exp * 1000;

  // Compare the expiration time with the current time using Day.js
  return dayjs(expirationTime).isBefore(dayjs());
};

axiosInstance.interceptors.request.use(
  async (req) => {
    if (isAccessTokenExpired()) {
      try {
        // call the refresh token endpoint
        const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refreshToken"): null;
        const response = await axiosInstance.post(
          "token/refresh",
          {refreshToken}
        );
        console.log("REFRESH_API_CALL ", response);

        // destructer the response to get the access token
        const { accessToken } = response.data;

        // Update the access token in the local storage
        typeof window !== "undefined" ? localStorage.setItem("accessToken", accessToken) : null;
      } catch (error) {
        console.log("Token refresh failed:", error);
        // Clear stored user data (both access and refresh tokens) and redirect to login page
        typeof window !== "undefined" ? localStorage.removeItem("accessToken"): null;
        typeof window !== "undefined" ? localStorage.removeItem("refreshToken"): null;
      }
    }
    // Get the access token from local storage
    const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken"): null;

    // If the access token exists, add it to the request headers
    

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors here (e.g., unauthorized, server errors, etc.)
    // You can also redirect to a login page or display error messages.
    return Promise.reject(error);
  }
);

export default axiosInstance;
