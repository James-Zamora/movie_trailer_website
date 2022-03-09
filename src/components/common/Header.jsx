import './styles/header.css'

const Header = ({ item }) => {
    return (
        <>
        {item &&
            <header>
                <div className="img-wrapper">
                    <img src={item.poster_path != '' ? 'https://image.tmdb.org/t/p/w1280'+item.poster_path : "https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg"} alt="" />
                    <div className="concord-img-gradient"></div>
                </div>
                <div className="container">
                    <h1>
                        {item.original_title}
                    </h1>
                    <div className="info">
                        <h3>{item.release_date}</h3>
                        <span></span>
                        <h3>18+</h3>
                        <span></span>
                        <h3>Season 1</h3>
                        <span></span>
                        <h3>TV Drama</h3>
                    </div>
                    <div className="actions">
                        <div className="btn btn-danger">Play</div>
                        <div className="btn btn-dark">My List</div>
                    </div>
                    <p>
                        {item.overview}
                    </p>
                </div>
            </header>
        }
        </>
    )
}

export default Header