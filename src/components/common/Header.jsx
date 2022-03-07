import './styles/header.css'

const Header = () => {
    return (
        <header>
            <div className="img-wrapper">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
                <div className="concord-img-gradient"></div>
            </div>
            <div className="container">
                <h1>
                    Black Mirror
                </h1>
                <div className="actions">
                    <div className="btn btn-dark">Play</div>
                    <div className="btn btn-dark">My List</div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rem harum a aspernatur facere, quisquam, temporibus tempora repellat error similique dolore quas. Minus iusto tempora ratione perferendis consequuntur. Perspiciatis minus nisi obcaecati voluptate aliquid aspernatur accusantium delectus laboriosam facilis nam.
                </p>
            </div>
        </header>
    )
}

export default Header