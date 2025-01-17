import React, { useContext, useState } from 'react'
import './Create.css';
import {FirebaseContext,AuthContext} from '../../Store/Context'
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, serImage] = useState(null)
  const date = new Date() 
  const navigate = useNavigate();
  const handleSubmit = () => {
               firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
                ref.getDownloadURL().then((url)=>{
                  console.log(url);
                  firebase.firestore().collection('products').add({
                    name,
                    category,
                    price,
                    url,
                    userId:user.uid,
                    creatAt:date.toDateString()
                  })
                  navigate('/')
                })
               })
  }
  return (

    <Fragment>
    <card> 
      <div className="centerDiv">
      
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            type="text"
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input 
          className="input"
          value={price}
          onChange={(e)=> setPrice(e.target.value)}
          type="number" id="fname" name="Price" />
          <br />
   
        <br />
        <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
        
          <br />
          <input onChange={(e)=>{
                 serImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
      </div>
    </card>
  </Fragment>
  )
}

export default Create