import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm, onSearch, error }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            />
            <button onClick={onSearch} className="search-button">Search</button>
            {error && <div className="error">Please enter a search term</div>}
        </div>
    );
}
