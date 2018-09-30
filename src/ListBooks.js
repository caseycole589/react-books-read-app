import React from 'react';
import BookShelf from './BookShelf'
const ListBooks = props => {
    const { books } = props;
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf books={books} title={"Currently Reading"} shelfFitler={'currentlyReading'} />
                    <BookShelf books={books} title={"Want to Read"} shelfFitler={'wantToRead'} />
                    <BookShelf books={books} title={"Want to Read"} shelfFitler={'read'} />
                </div>
            </div>
        </div>
    );
}
export default ListBooks;