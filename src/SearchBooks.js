import React from 'react';
import { Link } from 'react-router-dom'
import { search } from "./BooksAPI";
import BookShelf from './BookShelf'
class SearchBooks extends React.Component {
    state = {
        searchInput: "",
        foundBooks: [],
    }
    clearSearchInput = () => {
        this.setState({
            searchInput: "",
            foundBooks: [],
        })
    }
    querySearch = e => {
        const val = e.target.value;
        this.setState({
            searchInput: val
        }, this.fetchData(val))
    }
    fetchData = val => {
        search(val).then(resp => {
            if (!resp || resp.error) {
                this.mergeBooks([]);
            } else {
                this.mergeBooks(resp)
            }
        })
    }
    mergeBooks = foundBooks => {
        for (let found of foundBooks) {
            for (const book of this.props.books) {
                if (book.id === found.id) {
                    found.shelf = book.shelf;
                    break;
                }
            }
            if (!found.shelf) {
                found.shelf = 'none';
            }
        }
        this.setState({
            foundBooks: foundBooks
        })
    }
    render() {
        const { onUpdateBook } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={this.querySearch} type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookShelf onUpdateBook={onUpdateBook} books={this.state.foundBooks} title={"Results"} shelfFitler={'all'} />
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBooks;