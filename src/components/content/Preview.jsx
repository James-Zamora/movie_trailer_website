import './styles/preview.css'

const Preview = ({ item, preview }) => {
    return (
        <div ref={preview} className="preview">
            <div className="video"></div>
            <div className="details">
                <h3>{item && item.title}</h3>
                <p>{item && item.length}</p>
                <p>{item && item.rating} | {item && item.views}</p>
            </div>
        </div>
    )
}

export default Preview