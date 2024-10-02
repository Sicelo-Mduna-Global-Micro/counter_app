import React, { Component } from 'react'
class Counter extends Component {
;

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        if(this.props.counter === 0){
            classes += 'warning';
        }

        else{
            classes += 'primary';
        }

        return classes;

    }



     
    render() { 
        return (
            <>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick = {() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick = {() => this.props.onDelete(this.props.counter.id)}  className='btn btn-danger btn-sm m-2'>Delete</button>
                <br></br>
            </>
        );
    }

    formatCount(){
        const {value} = this.props.counter;
        if(value === 0){
            return("Zero")
        }
        else if(value > 0){
            return(value)
        }

        else{
            return("Negative Number")
        }
    }
}
 
export default Counter;