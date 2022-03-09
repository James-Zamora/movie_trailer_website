import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/contentGrid.css'

const ContentColumn = ({ items, preview, setItem,  }) => {

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
        <h1>More like it</h1>
        <section className="content-column">
            {items.map((item, index) => {
                return (
                    window.innerWidth <= 786 ?
                        <div 
                            key={`content-column-${index}`}
                            className="card"
                            onMouseEnter={(e) => onMouseEnter(e, item)}
                            onMouseLeave={onMouseLeave}
                        >
                            <img src={item.img} />
                            <div className="title">
                                <h2>{item.title}</h2>
                                <h2>⭐{item.rating}</h2>
                            </div>
                            <div className="details">
                                <h3>{item.length}</h3>
                                <span></span>
                                <h3>{item.year}</h3>
                                <span></span>
                                <h3>{item.age}</h3>
                                <span></span>
                                <h3>{item.genre}</h3>
                            </div>
                        </div>
                    :
                        <Link 
                            key={`content-column-${index}`}
                            to={`/watch/${item.title}`}
                            className="card"
                            onMouseEnter={(e) => onMouseEnter(e, item)}
                            onMouseLeave={onMouseLeave}
                        >
                            <img src={item.img} />
                            <div className="title">
                                <h2>{item.title}</h2>
                                <h2>⭐{item.rating}</h2>
                            </div>
                            <div className="details">
                                <h3>{item.length}</h3>
                                <span></span>
                                <h3>{item.year}</h3>
                                <span></span>
                                <h3>{item.age}</h3>
                                <span></span>
                                <h3>{item.genre}</h3>
                            </div>
                        </Link>
                )
            })}
        </section>
        </>
    )
}

export default ContentColumn