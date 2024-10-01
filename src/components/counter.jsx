import React, { Component } from 'react'
class Counter extends Component {
    state = { 
        value : this.props.counter.value
     };

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        if(this.state.count === 0){
            classes += 'warning';
        }

        else{
            classes += 'primary';
        }

        return classes;

    }

    handleIncrement = () =>{
        this.setState({value : this.state.value + 1});

    }



     
    render() { 
        return (
            <>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick = {this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick = {() => this.props.onDelete(this.props.counter.id)}  className='btn btn-danger btn-sm m-2'>Delete</button>
                <br></br>
            </>
        );
    }

    formatCount(){
        const {value} = this.state;
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