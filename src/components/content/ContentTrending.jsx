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
                        <h6>
                            Duration: 2h 08m
                        </h6>
                        <div className="details">
                            <h2>⭐8.3</h2>
                            <h3>2021</h3>
                            <span></span>
                            <h3>18+</h3>
                            <span></span>
                            <h3>Season 1</h3>
                            <span></span>
                            <h3>TV Drama</h3>
                        </div>
                        <h1>Black Mirror</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut animi quas eaque sint debitis, illum, placeat fugit laudantium qui libero voluptatibus voluptatem reiciendis excepturi architecto ad vitae voluptate nam consectetur quo ut nesciunt autem temporibus. Suscipit id possimus sint debitis!</p>
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