import React from 'react';
import { Link } from 'react-router-dom'
import { search } from "./BooksAPI";
import BookShelf from './BookShelf'
class SearchBooks extends React.Component {
    state = {
        searchInput: "",
        foundBooks: []
    }
    clearSearchInput = () => {
        this.setState({
            searchInput: "",
            foundBooks: []
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
            this.setState({
                foundBooks: resp
            })
        })
    }
    render() {
        const { onUpdateBook } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
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