import axios from "axios";


class AuthApi {
    
    // Register User
    registerUserI(data){
        return new Promise((resolve,reject) =>{
            axios.post(process.env.API_BASE_URL, data)
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