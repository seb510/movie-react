import React, { useState } from 'react';

export default function MovieCard({ movie }) {
    const [showMore, setShowMore] = useState(false);

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="movie-card">
            <div className="image">
                <img src={movie.image ? movie.image.medium : '/images/default.jpg'} alt="movie wallpaper" loading="lazy" />
            </div>
            <div className="data-info movie-info">
                <div><span>Name: </span> {movie.name}</div>
                <div><span>Premiered: </span> {movie.premiered}</div>
                <div><span>Type: </span> {movie.type}</div>
                <div><span>Genres: </span> {movie.genres.length ? movie.genres.join(', ') : 'Without info'}</div>

                {/* Видима частина контенту */}
                <div><span>Language: </span> {movie.language}</div>

                {/* Прихована частина контенту, що відображатиметься лише при showMore === true */}
                {showMore && (
                    <>
                        <div><span>Status: </span> {movie.status}</div>
                        <div><span>Runtime: </span> {movie.runtime} minutes</div>
                        <div><span>Rating: </span> {movie.rating?.average || 'No rating'}</div>
                        <div><span>Official Site: </span>
                            {movie.officialSite ? (
                                <a href={movie.officialSite} target="_blank" rel="noopener noreferrer">{movie.officialSite}</a>
                            ) : 'Not available'}
                        </div>
                        <div><span>Schedule: </span> {movie.schedule.days.join(', ')} at {movie.schedule.time}</div>
                        <div><span>Network: </span> {movie.network ? movie.network.name : 'Not available'}</div>
                        <div><span>Country: </span> {movie.network?.country?.name || 'Not available'}</div>
                        <div><span>IMDb: </span>
                            {movie.externals.imdb ? (
                                <a href={`https://www.imdb.com/title/${movie.externals.imdb}`} target="_blank" rel="noopener noreferrer">IMDb</a>
                            ) : 'Not available'}
                        </div>
                        <div>
                            <span>Summary: </span>
                            <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
                        </div>
                    </>
                )}

                {/* Кнопка для перемикання видимості */}
                <button onClick={handleToggleShowMore}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </div>
    );
}
