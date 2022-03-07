import { useRef, useState } from 'react'
import { PlayerView, ContentColumn, Preview } from '../components'
import './styles/view.css'

const View = () => {
    const preview = useRef()
    const [item, setItem] = useState()

    return (
        <div className="container">
            <div className="view-page">
                <PlayerView item={items[0]} />
                <ContentColumn items={items} preview={preview} setItem={setItem} />
                <Preview preview={preview} item={item} />
            </div>
        </div>
    )
    
}

const items = [
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    },
    {
        img: 'https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_large.jpg',
        title: 'Black Mirror',
        views: '2222',
        length: '1h 20m',
        rating: '4.6',
        age: '18+',
        year: '2021',
        genre: 'TV Drama',
    }
]
export default View