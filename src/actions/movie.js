import axios from 'axios'

const getTrendingTV = async () => {
    const responce = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=7c22573a9bc36e843de16a41601db91f')
    return responce.data.results
}

const getTrendingMovies = async () => {
    const responce = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=7c22573a9bc36e843de16a41601db91f')
    return responce.data.results
}

const getMovieVideos= async (id, type) => {
    const responce = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=7c22573a9bc36e843de16a41601db91f`)
    return responce.data.results
}

const getMovieById= async (id, type) => {
    const responce = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=7c22573a9bc36e843de16a41601db91f`)
    return responce.data
}

export {
    getTrendingMovies,
    getTrendingTV,
    getMovieVideos,
    getMovieById
}