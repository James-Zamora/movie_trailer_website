import { Link } from 'react-router-dom'
import './styles/preview.css'

const Preview = ({ item, preview }) => {
    return (
        <div 
            ref={preview} 
            className="preview"
            onMouseLeave={() => {
                preview.current.removeAttribute('active');
            }}
        >
            <div className="video"></div>
            <div className="btn-close" onClick={() => {preview.current.removeAttribute('active');}}>Close</div>
            <Link to={`/watch/${item && item.title}`} className="details">
                <h3>{item && item.title}</h3>
                <p>{item && item.length}</p>
                <p>⭐{item && item.rating} | Views: {item && item.views.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </Link>
        </div>
    )
}

export default Preview