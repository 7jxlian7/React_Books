import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Books from "./Components/Books";
import FooterNavigation from "./Components/FooterNavigation";
import HeaderNavigation from "./Components/HeaderNavigation";

import axios from "axios";

const results_per_page = 12;

const App = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(results_per_page);

    const[query, setQuery] = useState("")

    const fetchBooks = async () => {
        if(!query)
            setQuery('flaubert')
        setLoading(true);
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&maxResults=40`);
        
        setBooks(res.data.items);
        setLoading(false);
    };

    useEffect(() => {
        fetchBooks();
        paginate(1);
        return () => {
            setBooks();
        };
    }, [query]);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    let currentBooks = [];
    let maxPage = 1;
    if(books){
        currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
        maxPage = Math.ceil(books.length / booksPerPage);
    }

    return (
        <div>
            <HeaderNavigation 
                setQuery={setQuery}
                search={query}
            />
            <Books 
                books={currentBooks}
                loading={loading}
            />
            <FooterNavigation
                pageNumber={currentPage}
                maxPages={maxPage}
                paginate={paginate}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("App"));

export default App;
