import React, { useEffect, useState } from 'react'
import axios from '../../Axios/Axios'
import './Banner.css'
import { API_KEY ,imageUrl} from '../../Constants/Constants'

const Banner = () => {

  const [movie, setMovie] = useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
     const randomMovie = response.data.results[Math.floor(Math.random()* response.data.results.length)]
     setMovie(randomMovie);
    })
    // .catch((error)=>{
      // alert("network error")
    // })
  },[])


  return (
    <div  style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : 'loading..'})`}} className='Banner'>

        <div className='content'>
            <h1 className='title'>{movie ? movie.title : 'loading..' }</h1>
            <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview :'loding..'}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner