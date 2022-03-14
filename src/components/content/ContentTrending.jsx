import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './styles/contentTrending.css'

const ContentTrending = ({item}) => {

    const bgImage = useRef()
    
    window.addEventListener('scroll', () => {
        if(bgImage.current) {
            let scrolled = bgImage.current.offsetParent.parentElement.getBoundingClientRect().bottom - bgImage.current.clientHeight-100;
            bgImage.current.style.transform = `translateY(${(scrolled * 0.05 )}px)`
        }
    });

    return (
        <>
        {item &&
        <section>
            <div className="container">
                <div className="content-trending">
                    <div className="img-wrapper">
                        <img ref={bgImage} src={item.poster_path != '' ? 'https://image.tmdb.org/t/p/w1280'+item.poster_path : "https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg"} alt="" />
                        <div className="concord-img-gradient g-90"></div>
                        <div className="concord-img-gradient g-180"></div>
                    </div>
                    <div className="info">
                            {item.release_date ? 
                                <h6>{item.release_date}</h6>
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
                        {item && <h1>{ item.original_title ? item.original_title : item.name}</h1>}
                        <p>{item.overview}</p>
                        <div className="actions">
                            <Link to={`/watch/${item && item.media_type}/${item && item.id}`} className="btn btn-danger">Watch</Link>
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