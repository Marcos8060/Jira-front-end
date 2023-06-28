import axios from "axios";


const BASE_URL = 'http://localhost:8000/api/'
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
}

export const authApi = new AuthApi();