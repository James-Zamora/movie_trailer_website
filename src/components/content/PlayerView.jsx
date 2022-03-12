import './styles/playerView.css'

const PlayerView = ({ trailer, movie }) => {
    return (
        <section className="player-view">{console.log(movie)}
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
                            {movie && <h1>{ movie.original_title ? movie.original_title : movie.name}</h1>}
                            <h3>{movie.tagline}</h3>
                            <p>
                                {movie.overview}
                            </p>
                        </div>
                        <div className="details">
                            <h3>
                                { movie.release_date ?  movie.release_date : "Last Air Date: " + movie.last_air_date }
                            </h3>
                            { movie.last_air_date && 
                                <h3>
                                    { 'Last Eposide: ' + movie.last_episode_to_air.episode_number }
                                </h3>
                            }
                            { movie.first_air_date && 
                                <h3>
                                    { "First Air Date: " + movie.first_air_date }
                                </h3>
                            }
                            {movie.adult &&
                                <>
                                    <h3 className="is-edult">18+</h3>
                                </>
                            }
                            <h3>{movie.genres.map(i=> i.name + " ")}</h3>
                            {movie.tuntime && <h3>Duration: { Math.floor((movie.runtime / 60))+ 'h ' + Math.round(((movie.runtime / 60) - Math.floor(movie.runtime / 60)) * 60) + 'm'}</h3> }
                            {movie.budget && movie.budget != 0 && <h3>Budget: { '$' + movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h3>}
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