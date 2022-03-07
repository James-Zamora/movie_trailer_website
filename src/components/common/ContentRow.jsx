import { useState, useRef } from 'react'
import './styles/contentRow.css'

const ContentRow = ({ title, items }) => {

    const contentRow = useRef()
    const [isScrolling, setIsScrolling] = useState(false)
    const [clientX, setClientX] = useState(0)
    const [scrollX, setScrollX] = useState(0)

    const onMouseDown = (e) => {
        setIsScrolling(true)
        setClientX(e.clientX)
    }

    const onMouseMove = (e) => {
        if (isScrolling) {
            contentRow.current.scrollLeft = scrollX - e.clientX + clientX;
            setScrollX(scrollX - e.clientX + clientX);
            setClientX(e.clientX);
        }
    }

    const resetOnMouseUp = (e) => {
        if (contentRow.current.scrollLeft === 0) {
            setScrollX(0)
            setClientX(0)
        }
        if (contentRow.current.scrollLeft === contentRow.current.scrollWidth - contentRow.current.clientWidth) {
            setScrollX(contentRow.current.scrollLeft)
            setClientX(contentRow.current.scrollLeft)
        }
        setIsScrolling(false)
    }

    const onWheel = (e) => {
        if (e.deltaY > 0) {
            contentRow.current.scrollLeft  += 100
        } else {
            contentRow.current.scrollLeft  -= 100
        }
    }

    return (
        <>
            <section className="content-row">
                <div className="container">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="cards"
                        ref={contentRow}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={resetOnMouseUp}
                        onWheel={onWheel}
                        onMouseLeave={() => setIsScrolling(false)}
                    >
                        {items.map((item, index) => {
                            return (
                                <div key={`cards-${title}-${index}`} className="card">
                                    <img src={item.img} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentRow