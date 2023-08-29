import { createSlice } from "@reduxjs/toolkit";
import { projectApi } from "@/redux/service/projects";


const initialState = {
    projects: [],
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
        setProjects:(state,action)=>{
            state.projects = action.payload
        }
    }
})

export const { setProjects } = projectSlice.actions


export const getAllProjects = () => async dispatch => {
    const res = await projectApi.fetchProjects()
    const projectsData = res;
    console.log("SLICE PROJECTS RESPONSE ",res)
    dispatch(setProjects(projectsData))
}


export default projectSlice.reducer;