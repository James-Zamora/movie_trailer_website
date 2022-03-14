import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/recomendation.css'

const SearchResults = ({ items, isLoading, preview, setItem, type }) => {

    const [delayHandler, setDelayHandler] = useState(null)

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
            item['media_type'] = type
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
        <section className="content-column">
            {items ?
                <>
                {items
                .sort(
                        (a,b) => ( b.release_date ? +b.release_date.slice(0,4) : b.first_air_date ? +b.first_air_date.slice(0,4) : 0) - ( a.release_date ? +a.release_date.slice(0,4) : a.first_air_date ? +a.first_air_date.slice(0,4) : 0) 
                    )
                .map((item, index) => {
                    return (
                        window.innerWidth <= 786 && item.poster_path ?
                            <div 
                                key={`content-search-${index}`}
                                className="card"
                                onMouseEnter={(e) => onMouseEnter(e, item)}
                                onMouseLeave={onMouseLeave}
                            >
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                <div className="title">
                                    <h2>{ item.original_title ? item.original_title : item.name}</h2>
                                    <div>
                                        <h3>⭐{item.vote_average}</h3>
                                        <h3>{ item.release_date ?  item.release_date : item.first_air_date ? "First Air Date: " + item.first_air_date : '' }</h3>
                                    </div>
                                </div>
                            </div>
                        : item.poster_path &&
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
                                        {item.vote_average != 0 && <h3>⭐{item.vote_average}</h3> }
                                        <h3>{ item.release_date ?  item.release_date : item.first_air_date ? "First Air Date: " + item.first_air_date : '' }</h3>
                                    </div>
                                </div>
                            </Link>
                    )
                })}
                </>
            :
                isLoading ?
                    <h5 className="loading">Loading ...</h5>
                :
                    <h5 className="loading"></h5>
            }
        </section>
        </>
    )
}

export default SearchResults