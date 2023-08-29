import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './features/projects'


export const store = configureStore({
    reducer:{
        project: projectReducer
    }
})