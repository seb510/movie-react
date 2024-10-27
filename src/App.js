import React, { useState, useEffect } from 'react';
import MovieList from "./components/MovieList";
import SearchBar from './components/SearchBar';
import SortDropDown from './helpers/SortDropDown';
import ThemeToggle from "./components/ThemToggle";
import { fetchMovies } from "./API/api";
import './styles/styles.css'

export default function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Car');
    const [sortOption, setSortOption] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMovies(searchTerm).then(setMovies);
    }, []);

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setError("Please enter a search term.");
            return;
        }
        setError("");
        fetchMovies(searchTerm).then(setMovies);
    };

    return (
        <section className="movie-section">
            <div className="container">
                <ThemeToggle/>
                <h1>Movie Search <span className="tag">by {searchTerm}</span></h1>
                <div className="movie-options">
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        onSearch={handleSearch}
                        error={error}
                    />
                    <SortDropDown setSortOption={setSortOption}/>
                </div>
                <MovieList movies={movies} sortOption={sortOption}/>
            </div>
        </section>
    );
}
