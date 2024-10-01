import React, { Component } from 'react'
class Counter extends Component {
    state = { 
        count : 0

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
        this.setState({count : this.state.count + 1});

    }

    handleDelete = () =>{

    }



     
    render() { 
        return (
            <>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick = {this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick = {this.props.onDelete}  className='btn btn-danger btn-sm m-2'>Delete</button>
                <br></br>
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