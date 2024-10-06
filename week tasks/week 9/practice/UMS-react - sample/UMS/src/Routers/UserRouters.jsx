import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPagae from '../Pages/User/RegisterPagae'


const UserRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/register' element={<RegisterPagae/>}/>
        </Routes>
        
    </div>
  )
}

export default UserRouters