import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userDetails: localStorage.getItem("userDetails")
    ?JSON.parse(localStorage.getItem("userDetails"))
    : null,
}


export const userDetailsSlice = createSlice({
    name:"User",
    initialState:{
        userDetails : ''
    },
    reducers: {
        setUserDetails: (state, action) =>{
            state.userDetails = action.payload
            localStorage.setItem('userDetails',JSON.stringify(action.payload))
        }
    }
})

export const  { setUserDetails } = userDetailsSlice.actions
// export const selectUser = (state) => state.user
export default userDetailsSlice.reducer