import React from 'react';

const FooterNavigation = ({ pageNumber, maxPages, paginate }) => {

    let next = pageNumber === maxPages ? pageNumber : pageNumber + 1;
    let previous = pageNumber === 1 ? pageNumber : pageNumber - 1;

    return (
        <footer>
            <input
                type="submit"
                id="previous-page"
                value="Précédent"
                onClick={() => paginate(previous)}
                disabled = {pageNumber === 1 ? true : ""}
            />
            <input
                type="submit"
                id="next-page"
                value="Suivant"
                onClick={() => paginate(next)}
                disabled = {pageNumber === maxPages ? true : ""}
            />
        </footer>
    );
};

export default FooterNavigation;