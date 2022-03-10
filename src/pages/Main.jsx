import { useEffect, useRef, useState } from 'react'
import { Header, ContentRow, Preview, ContentTrending } from '../components'
import { getTrendingTV, getTrendingMovies } from '../actions/movie'

const Main = () => {

    const preview = useRef()
    const [item, setItem] = useState()
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTV, setTrendingTV] = useState([])


    useEffect(() => {
        getTrendingMovies().then(res => setTrendingMovies(res))
        getTrendingTV().then(res => setTrendingTV(res))
    }, [])

    return (
        <>
            <Header item={trendingMovies.length != 0 ? trendingMovies[0] : null} />
            <ContentRow 
                title="TRENDING MOVIES" 
                items={trendingMovies} 
                preview={preview} 
                setItem={setItem}/>
            <ContentTrending item={trendingTV.length != 0 ? trendingTV[10] : null} />
            <ContentRow 
                title="TRENDING TV SHOWS" 
                items={trendingTV} 
                preview={preview} 
                setItem={setItem}/>
            <Preview preview={preview} item={item} />
        </>
    )

}

export default Main