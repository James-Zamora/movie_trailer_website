import './styles/playerView.css'

const Details = ({ movie }) => {
  return (
    <section className="view-info">
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
                    <h3>{ movie.release_date ?  movie.release_date : "Last Air Date: " + movie.last_air_date }</h3>
                    { movie.last_air_date && <h3><strong>Last Eposide: </strong>{ movie.last_episode_to_air.episode_number } </h3> }
                    { movie.first_air_date && 
                        <h3><strong>First Air Date: </strong>
                            { movie.first_air_date }
                        </h3>
                    }
                    {movie.adult &&
                        <>
                            <h3 className="is-edult">18+</h3>
                        </>
                    }
                    <h3>{movie.genres.map(i=> i.name + " ")}</h3>
                    {movie.runtime && <h3><strong><strong>Duration: </strong> </strong>{ Math.floor((movie.runtime / 60))+ 'h ' + Math.round(((movie.runtime / 60) - Math.floor(movie.runtime / 60)) * 60) + 'm'}</h3> }
                    {movie.budget && movie.budget != 0 && <h3><strong>Budget: </strong> { '$' + movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h3>}
                    {movie.revenue && movie.revenue != 0 && <h3><strong>Revenue: </strong> { '$' + movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h3>}
                    {movie.production_companies && 
                        <h3>
                            <strong>Production: </strong>
                            {movie.production_companies.map((item, index) => movie.production_companies.length != index+1 ? ' ' + item.name + "," : ' ' + item.name)}
                        </h3>
                    }
                    <h2>⭐{movie.vote_average} | Votes: {movie.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    {movie.homepage &&
                        <a href={movie.homepage} target="_blank">Official Website</a>
                    }
                </div>
            </>
        :
            <h1>Loading . . . </h1>
        }
    </section>
  )
}

export default Details