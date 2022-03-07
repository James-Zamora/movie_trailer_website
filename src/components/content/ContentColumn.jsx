import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/contentColumn.css'

const ContentColumn = ({ items, preview, setItem }) => {

    const [delayHandler, setDelayHandler] = useState(null)

    const onMouseEnter = (e, item) => {

        const offsetTop = e.currentTarget.offsetTop - 100
        const offsetLeft = e.currentTarget.offsetLeft - 100

        setDelayHandler(setTimeout(() => {
            setItem(item)
            preview.current.style.top = `${offsetTop}px`
            window.innerWidth <= 786 ? 
                (
                    preview.current.style.left = `${window.innerWidth - (window.innerWidth / 2 + preview.current.offsetWidth / 2)}px`
                )
            : 
                preview.current.style.left = `${offsetLeft}px`
            preview.current.setAttribute('active', '')
        }, 1000))

    }

    const onMouseLeave = (e) => {
        clearTimeout(delayHandler)
        preview.current.removeAttribute('active')
    }

    return (
        <section className="content-column">
            {items.map((item, index) => {
                return (
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
    )
}

export default ContentColumn