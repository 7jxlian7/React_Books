import SearchBar from "./SearchBar";

const HeaderNavigation = ({setQuery, query}) => {
    return (
        <header>
            <h1>Google API</h1>
            <div className="search-menu">
                <SearchBar 
                    setQuery={setQuery}
                    query={query}
                />
            </div>
        </header>
    );
}

export default HeaderNavigation