import React, { useState } from "react"
import MovieList from "./MovieList"

export default function SearchMovies() {
    
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    const searchMovies = async (e) => {
        e.preventDefault();
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`
        
        // fetch the data
        const res = await fetch(apiUrl)
        const data = await res.json()
        setMovies(data.results)
    }
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name </label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. avenger endgame" 
                />
                <button className="btn" type="submit">Search</button>
            </form>
            
            <MovieList movies={movies}/>
        </>
    )
}