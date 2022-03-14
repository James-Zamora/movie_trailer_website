import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecomendations } from '../../actions/movie'
import './styles/recomendation.css'

const ContentColumn = ({ preview, setItem,  }) => {

    const [delayHandler, setDelayHandler] = useState(null)
    const [items, setItems] = useState(null) 
    const params = useParams()
    

    useEffect(() => {
        if(!items) {
            getRecomendations(params.id, params.type).then((res) => setItems(res.results))
        }
    }, [])
    

    const onMouseEnter = (e, item) => {

        preview.current.removeAttribute('active')
        if(window.innerWidth > 786) {
            // Set width to preview element to width of target element + 100px to make it bigger
            preview.current.style.width = `${e.currentTarget.offsetWidth + 100}px`;
        }
        // Align preview element
        const offsetTop = e.currentTarget.offsetTop - (preview.current.offsetHeight - e.currentTarget.offsetHeight) / 2
        const offsetLeft = e.currentTarget.offsetLeft - (preview.current.offsetWidth - e.currentTarget.offsetWidth) / 2

        setDelayHandler(setTimeout(() => {
            setItem(item)
            preview.current.style.top = `${offsetTop}px`
            window.innerWidth <= 786 ? 
                preview.current.style.left = `${window.innerWidth - (window.innerWidth / 2 + preview.current.offsetWidth / 2)}px`
            : 
                preview.current.style.left = `${offsetLeft}px`
            preview.current.setAttribute('active', '')
        }, window.innerWidth <= 786 ? 100 : 1000))

    }

    const onMouseLeave = (e) => {
        clearTimeout(delayHandler)
    }

    return (
        <>
        {items && items.length > 0 && <h1>MORE LIKE IT</h1>}
        <section className="content-column">
            {items ?
                <>
                {items.map((item, index) => {
                    return (
                        window.innerWidth <= 786 ?
                            <div 
                                key={`content-column-${index}`}
                                className="card"
                                onMouseEnter={(e) => onMouseEnter(e, item)}
                                onMouseLeave={onMouseLeave}
                            >
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                <div className="title">
                                    <h2>{ item.original_title ? item.original_title : item.name}</h2>
                                    <div>
                                        <h3>⭐{item.vote_average}</h3>
                                        <h3>{ item.release_date ?  item.release_date : "Last Air Date: " + item.last_air_date }</h3>
                                    </div>
                                </div>
                            </div>
                        :
                            <Link 
                                key={`content-grid-${index}`}
                                to={`/watch/${item && item.media_type}/${item.id}`}
                                className="card"
                                onMouseEnter={(e) => onMouseEnter(e, item)}
                                onMouseLeave={onMouseLeave}
                            >
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                <div className="title">
                                    <h2>{ item.original_title ? item.original_title : item.name}</h2>
                                    <div>
                                        <h3>⭐{item.vote_average}</h3>
                                        <h3>{ item.release_date ?  item.release_date : "Last Air Date: " + item.last_air_date }</h3>
                                    </div>
                                </div>
                            </Link>
                    )
                })}
                </>
            :
                <h5 className="loading">Loading ...</h5>
            }
        </section>
        </>
    )
}

export default ContentColumn