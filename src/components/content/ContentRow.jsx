import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './styles/contentRow.css'

const ContentRow = ({ title, items, preview, setItem }) => {

    const contentRow = useRef()
    const [delayHandler, setDelayHandler] = useState(null)

    const onWheel = (e) => {
        if (e.deltaY > 0) {
            contentRow.current.scrollLeft  += 100
        } else {
            contentRow.current.scrollLeft  -= 100
        }
    }

    const onMouseEnterPreview = (e, item) => {

        const previewWidth = (preview.current.offsetWidth - e.currentTarget.offsetWidth) / 2
        const previewHeight = (preview.current.offsetHeight - e.currentTarget.offsetHeight) / 2
        const offsetTop = e.currentTarget.offsetTop - previewWidth
        const offsetLeft = e.currentTarget.getBoundingClientRect().left - previewHeight
        
        setDelayHandler(setTimeout(() => {
            setItem(item)
            preview.current.style.top = `${offsetTop}px`
            window.innerWidth <= 786 ? 
                preview.current.style.left = `${window.innerWidth - (window.innerWidth / 2 + preview.current.offsetWidth / 2)}px`
            : 
                preview.current.style.left = `${offsetLeft}px`
            preview.current.setAttribute('active', 'true')
        }, window.innerWidth <= 786 ? 100 : 1000))

    }

    const onMouseLeavePreview = (e) => {
        clearTimeout(delayHandler)
    }

    return (
            <section className="content-row">
                <div className="container">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="cards"
                        ref={contentRow}
                        onWheel={onWheel}
                    >
                        {items && items.length !== 0 ?
                            <>
                                {items.map((item, index) => {
                                    return (
                                        <div 
                                            onMouseEnter={(e) => onMouseEnterPreview(e, item)}
                                            onMouseLeave={onMouseLeavePreview}
                                            key={`cards-${title}-${index}`} 
                                            className="card"
                                        >
                                            {window.innerWidth <= 786 ?
                                                <div>
                                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                                                </div>
                                            :
                                                <Link to={`/watch/${item.id}`}>
                                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                                                </Link>
                                            }
                                        </div>
                                    )
                                })}
                            </>
                        :
                            <h4>Loading. . .</h4>
                        }
                    </div>
                </div>
            </section>
    )
}

export default ContentRow