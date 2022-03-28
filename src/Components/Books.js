import React, { Component } from 'react'

const Books = ({ books, loading }) => {

    if (loading)
        return <h2 className="loading-info">Chargement...</h2>;

    return (
        <main>
            {books.map((book) => (
                <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    date={book.volumeInfo.publishedDate}
                    url={book.saleInfo.buyLink}
                    images={book.volumeInfo.imageLinks}
                />
            ))}
        </main>
    );
}

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }
    
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        let thumbnail = "https://via.placeholder.com/150x200";
        let title = this.props.title;
        let description = this.props.description;

        if (this.props.images) thumbnail = this.props.images.thumbnail;

        if (this.props.title.length > 35 && !this.state.isHovered)
            title = this.props.title.substring(0, 35) + "...";

        if(this.props.description){
            if (this.props.description.length > 100)
                description = capitalizeFirstLetter(
                    this.props.description.substring(0, 100).toLowerCase() + "..."
                );
        } else {
            description = "Pas de description..."
        }
        return (
            <div className="item">
                <img src={thumbnail} alt={this.props.title} />
                <div className="item-info">
                    <span title={this.props.title}>
                        <a href={this.props.url}>
                            <h2
                                onMouseEnter={this.handleHover}
                                onMouseLeave={this.handleHover}    
                            >{title}</h2>
                        </a>
                    </span>
                    <p id="author">{this.props.author}</p>
                    <p id="date">{this.props.date}</p>
                    <p id="description">{description}</p>
                </div>
            </div>
        );
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Books;