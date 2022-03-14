import { useState, useRef } from "react"
import { SearchResults, SearchForm, Preview } from "../components"

const Search = () => {

    const preview = useRef()
    const [item, setItem] = useState()
    const [items, setItems] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState('movie')

    return (
        <>
            <div className="container">
                <SearchForm setItems={setItems} setIsLoading={setIsLoading} setType={setType} type={type} />
                <SearchResults items={items} isLoading={isLoading} preview={preview} setItem={setItem} type={type} />
                <Preview preview={preview} item={item} />
            </div>
        </>
    )
}

export default Search