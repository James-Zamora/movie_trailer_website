import { useRef } from 'react'
import './styles/videoRow.css'

const VideoRow = ({ trailers, setTrailer }) => {
    const videoRow = useRef()

    const onWheel = (e) => {
        if (e.deltaY > 0) {
            videoRow.current.scrollLeft  += 100
        } else {
            videoRow.current.scrollLeft  -= 100
        }
    }

    return (
        <section className="video-row">
            <h3>MORE TRAILERS</h3>
            <div
                className="video-row-container"
                ref={videoRow}
                onWheel={onWheel}>
                {trailers.map((item) => {
                    if(item.official) {
                        return (
                            <div className="card" onClick={() => {setTrailer(item); window.scrollTo(0, 0)}}>
                                <img src={ `https://img.youtube.com/vi/${item.key}/0.jpg`} alt="Thumbnail" />
                                <h3>
                                    {item.name}
                                </h3>
                            </div>
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default VideoRow