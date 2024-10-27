import React, { useState } from 'react';

export default function MovieCard({ movie }) {
    const [showMore, setShowMore] = useState(false);
    const [showEpisodes, setShowEpisodes] = useState(false);

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleToggleShowEpisodes = () => {
        setShowEpisodes(!showEpisodes);
    };

    return (
        <div className="movie-card">
            <div className="image">
                <img src={movie.image ? movie.image.original : '/images/default.jpg'} alt="movie wallpaper" loading="lazy" />
            </div>
            <div className="data-info movie-info">
                <div><span>Name: </span> {movie.name}</div>
                <div><span>Premiered: </span> {movie.premiered}</div>
                <div><span>Type: </span> {movie.type}</div>
                <div><span>Genres: </span> {movie.genres.length ? movie.genres.join(', ') : 'Without info'}</div>
                <div><span>Language: </span> {movie.language}</div>

                {showMore && (
                    <>
                        <div><span>Status: </span> {movie.status}</div>
                        <div><span>Runtime: </span> {movie.runtime} minutes</div>
                        <div><span>Rating: </span> {movie.rating?.average || 'No rating'}</div>
                        <div><span>Official Site: </span>
                            {movie.officialSite ? (
                                <a className="link" href={movie.officialSite} target="_blank" rel="noopener noreferrer">{movie.officialSite}</a>
                            ) : 'Not available'}
                        </div>
                        <div><span>Schedule: </span> {movie.schedule.days.join(', ')} at {movie.schedule.time}</div>
                        <div><span>Network: </span> {movie.network ? movie.network.name : 'Not available'}</div>
                        <div><span>Country: </span> {movie.network?.country?.name || 'Not available'}</div>
                        <div><span>IMDb: </span>
                            {movie.externals.imdb ? (
                                <a className="link" href={`https://www.imdb.com/title/${movie.externals.imdb}`} target="_blank" rel="noopener noreferrer">IMDb</a>
                            ) : 'Not available'}
                        </div>
                        <div>
                            <span>Summary: </span>
                            <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
                        </div>
                    </>
                )}

                <div className="control-content">
                    <button onClick={handleToggleShowMore}>
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>

                    <button onClick={handleToggleShowEpisodes}>
                        {showEpisodes ? 'Hide Episodes' : 'Show Episodes'}
                    </button>
                </div>

                {showEpisodes && movie.episodes && (
                    <div className="episodes-list">
                        <h4>Episodes:</h4>
                        <ul className="episode-list">
                            {movie.episodes.map((episode) => (
                                <li key={episode.id} className="episode-item">
                                    <span className="episode-name">{episode.name}</span> - <span className="episode-airdate">{episode.airdate}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
