import { useState } from "react"
import { getSearch } from "../../actions/movie"
import './styles/searchForm.css'

const SearchForm = ({ setItems, setIsLoading, setType, type }) => {

    const [searchText, setSearchText] = useState('')


    const search = () => {
        setIsLoading(true)
        if(searchText != '') {
            getSearch(searchText, type).then((res) => {setItems(res.results); setIsLoading(false);})
        }
    }

    return (
        <section className="search-form">
            <select onChange={(e) => setType(e.target.value)}>
                <option value="movie">Movie</option>
                <option value="tv">TV Show</option>
            </select>
            <input type="text" maxLength="20" placeholder={`Search by ${type} name`} value={searchText} onChange={(e) => setSearchText(e.currentTarget.value)} />
            <button className="btn btn-danger" onClick={search}>Search</button>
        </section>
    )
}

export default SearchForm