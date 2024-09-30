import React, { Component } from 'react'
class Counter extends Component {
    state = { 
        count : 0,

     };
     
    render() { 
        return (
            <>
                <span className='badge badge-primary m-2'>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </>
        );
    }

    formatCount(){
        const {count} = this.state;
        if(count === 0){
            return("Zero")
        }
        else if(count > 0){
            return(count)
        }

        else{
            return("Negative Number")
        }
    }
}
 
export default Counter;