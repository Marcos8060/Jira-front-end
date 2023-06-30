import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../service/authService";


const initialState = {
    userDetails: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCurrentUser:(state,action) =>{
            state.userDetails = action.payload,
            state.isLoggedIn = true;
        },
        logoutUser:(state) =>{
            state.userDetails = null;
            state.isLoggedIn = false;
        }
    }
})

export const { setCurrentUser } = authSlice.actions


export const userLogin = (data) => async dispatch => {
    const res = await authApi.loginUser(data)
    // convert user object to JSON string
    const jsonString = JSON.stringify(res.user)
    localStorage.setItem('userDetails', jsonString)
    localStorage.setItem('accessToken', res.access)
    // retrieve the userdetails
    const currentUser = JSON.parse(localStorage.getItem('userDetails'))
    dispatch(setCurrentUser(currentUser))
}

export const loadCurrentUser = () => async (dispatch) => {
    try {
      // Retrieve userDetails from local storage
      const jsonString = localStorage.getItem("userDetails");
      const currentUser = JSON.parse(jsonString);
  
      // Dispatch the setCurrentUser action with the data from local storage
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
      }
    } catch (error) {
      // Handle error if needed
    }
  };


export default authSlice.reducer;