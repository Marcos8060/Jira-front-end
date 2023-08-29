import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
class AuthApi {
    
    // Register User
    registerUser(data){
        return new Promise((resolve,reject) =>{
            axios.post(BASE_URL + "register", data)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err)
            })
        })
    }

    loginUser(data){
        return new Promise((resolve,reject) =>{
            axios.post(BASE_URL + "token/", data)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err)
            })
        })
    }
}

export const authApi = new AuthApi();