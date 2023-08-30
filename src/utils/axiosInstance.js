import axios from "axios";


// retrieve it from local storage
const accessTokenData = typeof window !== "undefined" ? localStorage.getItem('token') : null;

// convert it to an object first, then get the access property from the object
const accessToken = accessTokenData ? JSON.parse(accessTokenData).access : null;


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default axiosInstance;
