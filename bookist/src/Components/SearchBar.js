import React,{Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            input: ''

        }
    }

    handleChange(val){
        this.setState({input: val})
    }
    handleClick(){
        this.props.filterBooks(this.state.input)
        this.setState({input: ''})
    }
    handleClear(){
        this.setState({input: ''})
        this.props.reset()
    }
    render(){
        return(
            <div>
                <input onChange={e => this.handleChange(e.target.value)} value={this.state.input}/>
                <button onClick={()=>this.handleClick()}>
                    Search
                </button>
                <button onClick={()=>this.handleClear()}>
                    Clear
                </button>



            </div>
        )
    }
}
export default SearchBar