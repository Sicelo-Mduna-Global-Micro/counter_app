import React, { Component } from 'react'
class Counter extends Component {
    state = { 
        count : 0
     }; 
    render() { 
        return (
            <>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
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