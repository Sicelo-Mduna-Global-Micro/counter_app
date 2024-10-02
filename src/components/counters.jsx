import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() { 
        return (
            <>
                <button
                onClick = {this.props.onReset} 
                className='btn btn-primary btn-sm'>Reset
                </button>
                <div>
                    {this.props.counters.map(counter =><Counter key = {counter.id} onDelete = {this.props.onDelete}  onIncrement = {this.props.onIncrement} counter = {counter}/>)} 
                </div>

                
            </>
        );
    }
}
 
export default Counters;
