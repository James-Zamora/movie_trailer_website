import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Header, ContentRow, Preview, ContentTrending } from '../components'

const Main = () => {
    const preview = useRef()
    const [item, setItem] = useState()
    const [itemsTopRated, setItemsTopRated] = useState([])
    const [itemsTrending, setItemsTrending] = useState([])

    const getMoviesTopRated = async () => {
        const responce = await axios.get('https://api.themoviedb.org/3/movie/top_rated?region=US&api_key=7c22573a9bc36e843de16a41601db91f')
        setItemsTopRated(responce.data.results)
    }

    const getMoviesTrending = async () => {
        const responce = await axios.get('https://api.themoviedb.org/3//trending/movie/week?api_key=7c22573a9bc36e843de16a41601db91f')
        setItemsTrending(responce.data.results)
    }

    useEffect(() => {
        getMoviesTrending()
        getMoviesTopRated()
    }, [])

    return (
        <>
            <Header item={itemsTrending.length != 0 ? itemsTrending[0] : null} />
            <ContentRow 
                title="TRENDING THIS WEEK" 
                items={itemsTrending} 
                preview={preview} 
                setItem={setItem}/>
            <ContentTrending item={itemsTrending.length != 0 ? itemsTrending[13] : null} />
            <ContentRow 
                title="TOP RATED" 
                items={itemsTopRated} 
                preview={preview} 
                setItem={setItem}/>
            <Preview preview={preview} item={item} />
        </>
    )
}

export default Main