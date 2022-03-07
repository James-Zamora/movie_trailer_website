import { Header, ContentRow, Footer } from '../components'

const Main = () => {
    const items = [
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        },
        {
            img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
            title: 'Black Mirror',
            length: '1h 20m',
            rating: '4'
        }
    ]
    return (
        <>
            <Header />
            <ContentRow title="NETFLIX OROGINALS" items={items} />
            <ContentRow title="NETFLIX OROGINALS" items={items} />
            <ContentRow title="NETFLIX OROGINALS" items={items} />
            <Footer />
        </>
    )
}

export default Main