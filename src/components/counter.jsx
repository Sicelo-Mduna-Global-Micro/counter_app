import React, { Component } from 'react'
class Counter extends Component {
    state = { 
        count : 0,
        tags : ['tag1', 'tag2', 'tag3']

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

     
    render() { 
        return (
            <>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
                <ul>
                    <li>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</li>
                </ul>
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