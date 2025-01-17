import React, { useState,useContext } from 'react'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Store/Context';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate() 
  const [username, setUsername] = useState('');
  const [email, setEmail]  = useState('');
  const [phone, setPhone]  = useState('');
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const handleLogin = () => {
       navigate('/login')
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
            navigate("/login")
        })
      })
    })

    console.log(firebase);
    
    
  }
  return (
<div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form  onSubmit={handleSubmit}> 
          <label htmlFor="fname">username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        <a onClick={handleLogin}>Login</a>
      </div>
    </div>
        
  )
}

export default Signup