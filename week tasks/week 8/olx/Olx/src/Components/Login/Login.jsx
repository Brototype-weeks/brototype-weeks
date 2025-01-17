import React, { useState,useContext } from 'react'
import {FirebaseContext} from '../../Store/Context'
import './Login.css'
import Logo from '../../olx-logo.png';
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleSignup = () =>{
    navigate('/signup')
  }
  const handleLogin = (e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
         <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={((e)=> setEmail(e.target.value))}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={((e)=> setPassword(e.target.value))}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={handleSignup}>Signup</a>
      </div>
    </div>
  )
}

export default Login