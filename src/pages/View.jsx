import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerView, Recomendation, Preview, VideoRow, Details } from '../components'
import { getMovieVideos, getMovieById } from '../actions/movie'

const View = () => {
    const preview = useRef()
    const params = useParams()

    const [item, setItem] = useState()
    const [movie, setMovie] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [trailers, setTrailers] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        getMovieVideos(params.id, params.type).then(res => { setTrailers(res); setTrailer(res[0]); })
        getMovieById(params.id, params.type).then(res => { setMovie(res) })
    }, [params])

    return (
        <div className="container">
            <div className="view-page">
                <PlayerView trailer={trailer} />
                <Details movie={movie}/>
                {trailers && trailers.length > 1 &&
                    <VideoRow trailers={trailers} setTrailer={setTrailer} />
                }
                <Recomendation preview={preview} setItem={setItem} />
                <Preview preview={preview} item={item} />
            </div>
        </div>
    )
    
}

export default View