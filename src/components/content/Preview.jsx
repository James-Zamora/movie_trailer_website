import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getMovieVideos } from '../../actions/movie'
import './styles/preview.css'

const Preview = ({ item, preview }) => {

    const [trailer, setTrailer] = useState(null)
    const playerRef = useRef()

    useEffect(() => {
        if(item) {
            setTrailer(null)
            getMovieVideos(item.id, item.media_type).then(res => setTrailer(res[0].key))
        }
    }, [item])

    return (
        <div 
            ref={preview} 
            className="preview"
            onMouseLeave={() => {
                preview.current.removeAttribute('active');
                playerRef.current.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            }}
        >
            {trailer ? 
                <iframe 
                    ref={playerRef}
                    id="ytplayer" 
                    type="text/html"
                    src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&enablejsapi=1`}
                    allowFullScreen
                    allow="autoplay"
                    frameBorder="0"
                    autoFocus
                ></iframe>
            :
                <div className="video" style={{backgroundImage: `${item && "url('https://image.tmdb.org/t/p/w500"+item.poster_path}')`}}></div>
            }
            
            <div 
                className="btn-close" 
                onClick={() => {
                    preview.current.removeAttribute('active');
                    playerRef.current.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                }}
            >Close</div>
            <Link to={`/watch/${item && item.media_type}/${item && item.id}`} className="details">
                {item && <h3>{ item.original_title ? item.original_title : item.name}</h3>}
                {item &&<p> { item.release_date ? item.release_date : 'First Air Date: ' + item.first_air_date }</p> }
                <p>⭐{item && item.vote_average} | Votes: {item && item.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </Link>
        </div>
    )
}

export default Preview