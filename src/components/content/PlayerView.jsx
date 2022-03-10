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
            <div className="view-info">
                {movie ? 
                    <>
                        <div className="title">
                            <h1>{movie.original_title}</h1>
                            <h3>{movie.tagline}</h3>
                            <p>
                                {movie.overview}
                            </p>
                        </div>
                        <div className="details">
                            <h3>{movie.release_date}</h3>
                            {movie.adult &&
                                <>
                                    <h3 className="is-edult">18+</h3>
                                </>
                            }
                            <h3>{movie.genres.map(i=> i.name + " ")}</h3>
                            <h3>Duration: { Math.floor((movie.runtime / 60))+ 'h ' + Math.round(((movie.runtime / 60) - Math.floor(movie.runtime / 60)) * 60) + 'm'}</h3>
                            <h3>Budget: { '$' + movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h3>
                            <h2>⭐{movie.vote_average} | Votes: {movie.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                            {movie.homepage &&
                                <a href={movie.homepage} target="_blank">Official Website</a>
                            }
                        </div>
                    </>
                :
                    <h1>Loading . . . </h1>
                }
            </div>
        </section>
    )
}

export default PlayerView