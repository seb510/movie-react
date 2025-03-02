import React, {useState, useEffect} from 'react';
import ClockBlock from "./components/ClockBlock";
import MovieList from "./components/MovieList";
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemToggle';
import SortDropDown from './helpers/SortDropDown';
import {fetchMovies} from "./API/api";
import './styles/styles.css';

export default function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Car');
    const [sortOption, setSortOption] = useState('');
    const [searchError, setSearchError] = useState('');

    // Extracted function to validate and fetch movies
    const validateAndFetchMovies = async () => {
        if (!searchTerm.trim()) {
            setSearchError("Please enter a search term.");
            return;
        }
        setSearchError("");
        const fetchedMovies = await fetchMovies(searchTerm);
        setMovies(fetchedMovies);
    };

    useEffect(() => {
        // Immediately invoked async function to handle the promise
        (async () => {
            await validateAndFetchMovies(); // Handles the async function explicitly
        })();
    }, [searchTerm]);

    const handleSearch = async () => {
        await validateAndFetchMovies(); // Ensures the promise is not ignored
    };

    return (
        <section className="movie-section">
            <div className="container">
                <ThemeToggle/>
                <ClockBlock/>
                <h1>Movie Search by<span className="tag"> {searchTerm}</span></h1>
                <div className="movie-options">
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        onSearch={handleSearch} // Ensures search handling awaits validation
                        error={searchError}
                    />
                    <SortDropDown setSortOption={setSortOption}/>
                </div>
                <MovieList movies={movies} sortOption={sortOption}/>
            </div>
        </section>
    );
}