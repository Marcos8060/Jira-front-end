import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../service/authService";


const initialState = {
    userDetails: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCurrentUser:(state,action) =>{
            state.userDetails = action.payload
        }
    }
})

export const { setCurrentUser } = authSlice.actions


export const userLogin = (data) => async dispatch => {
    const res = await authApi.loginUser(data)
    // convert user object to JSON string
    const currentUser = JSON.stringify(res.user)
    localStorage.setItem('userDetails', currentUser)
    localStorage.setItem('accessToken',res.access)
}


export default authSlice.reducer;