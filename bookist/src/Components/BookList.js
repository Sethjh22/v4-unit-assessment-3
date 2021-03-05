import React,{Component} from 'react'

class BookList extends Component{

    handleAddToShelf(e){
        this.props.addToShelf(e.title)
    }
    
    render(){
        
        let mappedBooks = this.props.books.map((e, i)=> {
            return <section key={i}><img src={e.img} onClick={(e)=>this.handleAddToShelf(e)}/><h2>{e.title} by {e.author}</h2></section>
        })
        return(
            <div>{mappedBooks}</div>
        )
    }
}
export default BookList