import React,{useEffect,useState} from 'react'
//import ReactPlayer from 'react-player/youtube'
import YouTube from 'react-youtube'
import './RowPost.css'
import { imageUrl,API_KEY} from '../../../Constants/constants'
import axios from '../../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
       console.log(response.data)
       setMovies(response.data.results)
    }).catch(err=>{
     // alert('Network Error')
    })
  }, [])

  const opts = {
    height:'350',
    width:'100%',
    playerVars:{
      autoplay:1,
    },
  };

  const handleMovieTrailer = (id) =>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)

      if(response.data.results.length!==0){
        setUrlId(response.data.response[0])
        }else{
          console.log('trailer not available')
        }
    })

  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>

            <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )}
            
            
        </div>

   { urlId &&  <YouTube opts={opts} videoId={urlId.key} /> }
        
    </div>
  )
}

export default RowPost