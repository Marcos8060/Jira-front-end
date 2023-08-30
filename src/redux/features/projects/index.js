import { createSlice } from "@reduxjs/toolkit";
import { projectApi } from "@/redux/service/projects";

const initialState = {
    projects: [],
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        }
    }
})

export const { setProjects } = projectSlice.actions

export const getAllProjects = () => async dispatch => {
    try {
        const projectsData = await projectApi.fetchProjects();
        dispatch(setProjects(projectsData));
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

export default projectSlice.reducer;
