import React,{Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Shelf from './Components/Shelf'
import BookList from './Components/BookList'
import books from './data'
import SearchBar from './Components/SearchBar'


class App extends Component {
  constructor(){
    super()
    this.state={
      books,
      theShelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  addToShelf(val){
    // const newShelf = this.state.theShelf.push(val)
    this.setState({theShelf: [val]})
  }

  clearShelf(){
    this.setState({theShelf: []})
  }
  filterBooks(input){
    const filteredBooks = this.state.books.filter((e)=>{
      return !e.title.indexOf(input)
    })
    this.setState({books: filteredBooks})
  }

  reset(){
    this.setState({books: books})
    
  }

  render(){
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
      <section className="body">
        <BookList books={this.state.books} addToShelf={this.addToShelf}/>
        <Shelf  theShelf={this.state.theShelf} clearShelf={this.clearShelf}/>
      </section>
    </div>
  );
}
}

export default App;
