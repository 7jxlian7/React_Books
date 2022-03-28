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
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:flaubert&maxResults=40');
            
            setBooks(res.data.items);
            setLoading(false);
        };

        fetchBooks();

        return () => {
            setBooks({});
        };
    }, []);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // Recherche paginée des livres, si la recherche est vide, on affiche tous les livres
    let myBooks = books
    if(query != "") {
        myBooks = books.filter(book => {
            return book.volumeInfo.title.toLowerCase().includes(query.toLowerCase());
        });
    }
    const currentBooks = myBooks.slice(indexOfFirstBook, indexOfLastBook);
    
    return (
        <div>
            <HeaderNavigation 
                query={query}
                setQuery={setQuery}
            />
            <Books 
                books={currentBooks}
                loading={loading}
                query={query}
            />
            <FooterNavigation
                pageNumber={currentPage}
                maxPages={Math.ceil(myBooks.length / booksPerPage)}
                paginate={paginate}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("App"));

export default App;
