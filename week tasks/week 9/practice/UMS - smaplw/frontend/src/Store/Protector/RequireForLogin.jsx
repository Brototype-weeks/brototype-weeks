import React from 'react'
import { UseAuth } from "./UseAuth";
import { Navigate } from "react-router-dom";

const RequireForLogin = ({ children }) => {
   const user = UseAuth()
   if(user.userDetails){
    return <Navigate to={"/"} />
   }  
   return children;
}

export default RequireForLogin