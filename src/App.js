import React from 'react'
import './App.css'
import ListBooks from './ListBooks';
import { getAll, update } from './BooksAPI';
import { Route } from "react-router-dom";
import SearchBooks from './SearchBooks';
class BooksApp extends React.Component {
  state = {
    books: []
  }
  getAllBooks = () => {
    getAll()
      .then(resp => {
        this.setState({
          books: resp,
        })
      })
  }
  updateBook = (book, shelfName) => {
    update(book, shelfName)
      .then(() => {
        this.getAllBooks();
      })
  }
  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">

        <Route path="/" exact render={() => (
          <ListBooks onUpdateBook={this.updateBook} books={this.state.books} />
        )}></Route>
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} onUpdateBook={this.updateBook} />
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
