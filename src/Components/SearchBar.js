import { useState } from "react"; 

function SearchBar({setQuery, query}) {
    
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                key="search-input"
                id="search-input"
                placeholder="Mots clés..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <input
                type="submit"
                id="search-button"
                value="Rechercher"
            />
        </form>
    );
};

export default SearchBar;