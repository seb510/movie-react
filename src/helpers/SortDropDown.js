import React from 'react';

export default function SortDropDown({ setSortOption }) {
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className="sort-dropdown">
            <select onChange={handleSortChange}>
                <option value="">Sort by...</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </select>
        </div>
    );
}