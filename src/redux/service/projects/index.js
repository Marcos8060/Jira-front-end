import axiosInstance from "@/utils/axiosInstance";


class ProjectApi {
  
    // Register User
    fetchProjects(){
        return new Promise((resolve,reject) =>{
        axiosInstance.get(process.env.NEXT_PUBLIC_BASE_URL + 'project')
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
