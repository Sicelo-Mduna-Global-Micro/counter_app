import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() {
        const {onReset, onDelete, onIncrement} = this.props; 
        return (
            <>
                <button
                onClick = {onReset} 
                className='btn btn-primary btn-sm'>Reset
                </button>
                <div>
                    {this.props.counters.map(counter =><Counter key = {counter.id} onDelete = {onDelete}  onIncrement = {onIncrement} counter = {counter}/>)} 
                </div>

                
            </>
        );
    }
}
 
export default Counters;

