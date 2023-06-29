import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
class AuthApi {
    
    // Register User
    registerUser(data){
        return new Promise((resolve,reject) =>{
            axios.post(BASE_URL + "register", data)
            .then((res) =>{
                console.log("RES ",res);
                resolve(res.data)
            })
            .catch((err) =>{
                console.log("ERROR ",err);
                reject(err)
            })
        })
    }
}

export const authApi = new AuthApi();