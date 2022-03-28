import SearchBar from "./SearchBar";

const HeaderNavigation = ({query, setQuery}) => {


    return (
        <header>
            <h1>Google API</h1>
            <div className="search-menu">
                <SearchBar 
                    query={query}
                    setQuery={setQuery}
                />
                <input
                    type="submit"
                    id="search-button"
                    value="Rechercher"
                />
            </div>
        </header>
    );
}

export default HeaderNavigation