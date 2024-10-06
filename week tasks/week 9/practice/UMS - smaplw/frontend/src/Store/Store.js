import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/SetUser"


export default  configureStore({
    reducer:{
        user: userReducer
    }
})