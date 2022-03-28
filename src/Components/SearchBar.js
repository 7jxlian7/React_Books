import React from "react";

const SearchBar = ({query, setQuery}) => {
    return (
        <input
            type="text"
            key="search-input"
            id="search-input"
            placeholder="Mots clés..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default SearchBar;