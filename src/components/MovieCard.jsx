import React from 'react';

export default function MovieCard({ movie }) {
    return (
        <div className="data-item">
            <div className="image">
                <img src={movie.image ? movie.image.medium : '/images/default.jpg'} alt="movie wallpaper" loading="lazy" />
            </div>
            <div className="data-info">
                <div><span>Name: </span> {movie.name}</div>
                <div><span>Premiered: </span> {movie.premiered}</div>
                <div><span>Type: </span> {movie.type}</div>
                <div><span>Genres: </span> {movie.genres.join(', ') || 'Without info'}</div>
                <div><span>Language: </span> {movie.language}</div>
            </div>
        </div>
    );
}
