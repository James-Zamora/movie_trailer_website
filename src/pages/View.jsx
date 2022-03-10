import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerView, ContentGrid, Preview } from '../components'
import { getMovieVideos, getMovieById } from '../actions/movie'
import './styles/view.css'

const View = () => {
    const preview = useRef()
    const params = useParams()

    const [item, setItem] = useState()
    const [movie, setMovie] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [trailers, setTrailers] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        getMovieVideos(params.id).then(res => { setTrailers(res); setTrailer(res[0]) })
        getMovieById(params.id).then(res => { setMovie(res) })
        console.log(movie)

    }, [])

    return (
        <div className="container">
            <div className="view-page">
                <PlayerView trailer={trailer} movie={movie} />
                {/* <ContentGrid items={items} preview={preview} setItem={setItem} /> */}
                {/* <Preview preview={preview} item={item} /> */}
            </div>
        </div>
    )
    
}

export default View