import React,{Component} from 'react'

class Shelf extends Component{


    render(){
        let mappedTitles = this.props.theShelf.map((e, i)=>{
            return <h2 key={i}>{e}</h2>
        })
        
        return(
            <div>
                <button onClick={()=>this.props.clearShelf()}>clear shelf</button>
                <div>
                    {mappedTitles}
                </div>
            </div>
        )
    }
}
export default Shelf