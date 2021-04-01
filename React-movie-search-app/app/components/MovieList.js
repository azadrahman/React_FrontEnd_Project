import React from "react"

export default function MovieList({ movies }) {
    return (
        <div className="card-list">
            {movies.map(movie => (
                <div className="card" key={movie.id}>
                    <img className="card-image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + 'poster'}
                    />
                    <div className="card-content">
                        <h3 className="card-title">{movie.title}</h3>
                        <div className="hr">
                            <p><small>RELEASE DATE : {movie.release_date} </small></p>
                            <p><small>RATING : {movie.vote_average} </small></p>
                            <h3>
                                Overview:
                            </h3>
                             <p className="card-descp">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}