import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getMovieVideos } from '../../actions/movie'
import './styles/preview.css'

const Preview = ({ item, preview }) => {

    const [trailer, setTrailer] = useState(null)
    const playerRef = useRef()

    useEffect(() => {
        if(item) {
            getMovieVideos(item.id).then(res => setTrailer(res[0].key))
            console.log(item)
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
            <Link to={`/watch/${item && item.id}`} className="details">
                <h3>{item && item.original_title}</h3>
                <p>{item && item.release_date }</p>
                <p>⭐{item && item.vote_average} | Votes: {item && item.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </Link>
        </div>
    )
}

export default Preview