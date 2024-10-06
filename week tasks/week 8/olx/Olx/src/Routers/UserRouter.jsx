import React, { useContext, useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'

import Login from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'
import HomePage from '../Pages/HomePage'
import CreatePage from '../Pages/CreatePage'
import ViewPage from '../Pages/ViewPage'

import { AuthContext, FirebaseContext } from '../Store/Context'
import Post from '../Store/PostContext'

const UserRouter = () => {
  const { setUser} = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
    
  })
  
  return (
    <div>
      <Post>

      <Routes>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/'   element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>} />
        <Route path='/view' element={<ViewPage/>} />
      </Routes>
      </Post>
    </div>
  )
}

export default UserRouter