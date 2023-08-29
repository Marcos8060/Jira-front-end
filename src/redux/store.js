import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import projectReducer from './features/projects'


export const store = configureStore({
    reducer:{
        auth: authReducer,
        project: projectReducer
    }
})