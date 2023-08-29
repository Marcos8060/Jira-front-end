import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";


class ProjectApi {
    
    // Register User
    fetchProjects(){
        const accessToken = typeof window !== "undefined" ? localStorage.getItem('accessToken') : null;
        return new Promise((resolve,reject) =>{
            axios.get(process.env.NEXT_PUBLIC_BASE_URL + 'project',{
                headers:{
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((res) =>{
                console.log("PROJECT RESPONSE ",res);
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err)
            })
        })
    }
}

export const projectApi = new ProjectApi();