import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './styles/preview.css'

const Preview = ({ item, preview }) => {

    const [trailer, setTrailer] = useState(null)

    const getMovieTrailer = async () => {
        // if(item) {
        //     setTrailer(null)
        //     const responce = await axios.get(`https://imdb-api.com/en/API/Trailer/k_q9u21dj5/${item.id}`)
        //     setTrailer(responce.data)
        //     console.log(responce.data)
        // }
    }

    useEffect(() => {
        // getMovieTrailer()
    }, [item])

    return (
        <div 
            ref={preview} 
            className="preview"
            onMouseLeave={() => {
                preview.current.removeAttribute('active');
            }}
        >
            {trailer && trailer.linkEmbed ? 
                <iframe
                    src={trailer.linkEmbed}>
                </iframe>
            :
                <div className="video" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${item && item.poster_path}')`}}></div>
            }
            
            <div className="btn-close" onClick={() => {preview.current.removeAttribute('active');}}>Close</div>
            <Link to={`/watch/${item && item.id}`} className="details">
                <h3>{item && item.original_title}</h3>
                <p>{item && item.release_date }</p>
                {item && item.vote_average != '' ? 
                    <p>⭐{item && item.vote_average} | Votes: {item && item.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                :
                    <p>{item && item.genres}</p>
                }
            </Link>
        </div>
    )
}

export default Preview