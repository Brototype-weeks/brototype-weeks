import React from 'react'
import { UseAuth } from './UseAuth'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {

    const user = UseAuth()
    if(!user.userDetails){

        return <Navigate to={'/login'} />
    }
    return children
}

export default RequireAuth