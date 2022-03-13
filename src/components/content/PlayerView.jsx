import './styles/playerView.css'

const PlayerView = ({ trailer, movie }) => {
    return (
        <section className="player-view">
            <div className="video-wrapper">
                {trailer && 
                    <iframe 
                        id="ytplayer" 
                        type="text/html"
                        src={`https://www.youtube.com/embed/${trailer.key}?enablejsapi=1`}
                        allowFullScreen
                        frameBorder="0"
                        autoFocus
                    ></iframe>
                }
            </div>
        </section>
    )
}

export default PlayerView