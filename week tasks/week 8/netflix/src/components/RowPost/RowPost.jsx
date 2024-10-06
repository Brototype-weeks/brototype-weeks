
import React,{useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import axios from "../../Axios/Axios";
import {  API_KEY,imageUrl} from '../../Constants/Constants'
 const RowPost = (props) => {
   
   const [movie, setMovies] = useState([])
   const[urlId, seturlId]  = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
      
    })
    // .catch((error)=>{
      // console.log(error);
      // 
      // alert("network Error")
    // })
   
  }, [])

  const opts = {
    height : '190',
    width  : '340',
    playerVars : {
      autoplay : 1
    }
  };

  const handleMovie = (id) =>{
  console.log(id);
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data);
    if (response.data.results.length!==0) {
      seturlId(response.data.results[0])
    }else{
      console.log('array empty');
      
    }
    
  })


  }
  
  return (
    <div className='row'>
        <h1 className='row-head'><small>{props.title}</small></h1> 
        <div className="posters">
          {movie.map((obj)=>
          
            <img onClick={()=>handleMovie(obj.id) } className={props.isSmall ? 'smallPoster':'poster' } src={`${imageUrl+obj.poster_path}`} alt="poster" />
          )}
       
        </div>
   {   urlId &&  <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost