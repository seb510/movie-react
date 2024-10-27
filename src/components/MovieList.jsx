import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, sortOption }) {
    const sortedMovies = movies.slice().sort((a, b) => {
        if (sortOption === 'date') return new Date(b.premiered) - new Date(a.premiered);
        if (sortOption === 'name') return a.name.localeCompare(b.name);
        return 0;
    });

    if (movies.length === 0) return <p className="not-found">No movies found. Try a different search.</p>;

    return (
        <div id="data-wrapper" className="movie-list">
            {sortedMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
