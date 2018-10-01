import React from 'react';
import BookShelf from './BookShelf'
import { Link } from "react-router-dom";
const ListBooks = props => {
    const { books, onUpdateBook } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf onUpdateBook={onUpdateBook} books={books} title={"Currently Reading"} shelfFitler={'currentlyReading'} />
                    <BookShelf onUpdateBook={onUpdateBook} books={books} title={"Want to Read"} shelfFitler={'wantToRead'} />
                    <BookShelf onUpdateBook={onUpdateBook} books={books} title={"Read"} shelfFitler={'read'} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}
export default ListBooks;