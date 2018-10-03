import React from 'react';

const Book = props => {
    const handleSelect = evt => {
        props.onUpdateBook(book, evt.target.value)
    }
    const { book } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={handleSelect}>
                            <option value="move" disabled>Move to...</option>
                            {book.shelf === "currentlyReading"
                                ? <option value="currentlyReading"> ✔ Currently Reading</option>
                                : <option value="currentlyReading">Currently Reading</option>}
                            {book.shelf === "wantToRead"
                                ? <option value="wantToRead"> ✔ Want to Read</option>
                                : <option value="wantToRead">Currently Reading</option>}
                            {book.shelf === "read"
                                ? <option value="read"> ✔ Read</option>
                                : <option value="read">Read</option>}
                            {book.shelf === "none"
                                ? <option value="None"> ✔ None </option>
                                : <option value="None">None </option>}
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        </li>
    )
}
export default Book;