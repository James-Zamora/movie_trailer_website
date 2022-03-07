import './styles/playerView.css'

const PlayerView = ({item}) => {
    return (
        <section className="player-view">
            <div className="placeholder"></div>
            <div className="view-info">
                <h1>{item.title}</h1>
                <div>
                    <div className="details">
                        <h3>{item.year}</h3>
                        <span></span>
                        <h3>{item.age}</h3>
                        <span></span>
                        <h3>{item.genre}</h3>
                    </div>
                    <h2>⭐{item.rating} | Views: {item.views.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </div>
            </div>
        </section>
    )
}

export default PlayerView