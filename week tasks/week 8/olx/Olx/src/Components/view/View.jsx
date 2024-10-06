import React, { useContext, useEffect, useState } from 'react'
import './View.css'
import { postContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/Context';



const View = () => {

    const [userDetailes, setUserDetailes] = useState()
    const {postDetailes} = useContext(postContext)
    const {firebase} = useContext(FirebaseContext)
    useEffect(()=>{
        const {userId} = postDetailes  
        firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
            res.forEach(doc => {
                setUserDetailes(doc.data())
            });
        })
    },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetailes.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetailes.price}</p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
     { userDetailes &&   <div className="contactDetails">
          <p>Seller details</p>
          <p> {userDetailes.username} </p>
          <p> {userDetailes.phone} </p>
        </div>}
      </div>
    </div>
  )
}

export default View