import React, { useState, useEffect } from 'react';
import MovieList from "./components/MovieList";
import SearchBar from './components/SearchBar';
import SortDropDown from './helpers/SortDropDown';
import ThemeToggle from "./components/ThemToggle";
import { fetchMovies } from "./API/api";
import './styles/styles.css'

export default function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMovies('car').then(setMovies);
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
        <div className="container">
            <ThemeToggle />
            <h1>Movie Search</h1>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
                error={error}
            />
            <SortDropDown setSortOption={setSortOption} />
            <MovieList movies={movies} sortOption={sortOption} />
        </div>
    );
}
