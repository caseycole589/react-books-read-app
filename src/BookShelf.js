import React from 'react';
import Book from './Book'
const BookShelf = props => {
    const { shelfFitler, title, books, onUpdateBook } = props;
    const filteredBooks = books && books.length > 0 ? books.filter(book => book.shelf === shelfFitler || shelfFitler === 'all') : [];
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filteredBooks.map(book => (
                        <Book onUpdateBook={onUpdateBook} key={book.id} book={book} />
                    ))}
                </ol>
            </div>
        </div>
    );
}
export default BookShelf;