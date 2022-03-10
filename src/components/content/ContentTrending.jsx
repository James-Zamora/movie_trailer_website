import './styles/contentTrending.css'

const ContentTrending = ({item}) => {
    return (
        <>
        {item &&
        <section>
            <div className="container">
                <div className="content-trending"
                    style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url( ${item.poster_path != '' ? 'https://image.tmdb.org/t/p/w1280'+item.poster_path : "https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg"})`
                    }}
                >
                    <div className="info">
                            {item.release_date ? 
                                <h6>{item.release_date.slice(0,3)}</h6>
                            :
                                <h6>{item.first_air_date}</h6>
                            }
                        <div className="details">
                            <h2>⭐{item.vote_average}</h2>
                            {item.adult &&
                                <>
                                    <span></span>
                                    <h3 className="is-edult">18+</h3>
                                </>
                            }
                            {/* <span></span> */}
                            {/* <h3>{item.media_type.slice(0,1).toUpperCase() + item.media_type.slice(1) }</h3> */}
                        </div>
                        <h1>{item.original_name}</h1>
                        <p>{item.overview}</p>
                        <div className="actions">
                            <div className="btn btn-danger">Watch</div>
                            <div className="btn btn-dark">My List</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        }
        </>
    )
}

export default ContentTrending