import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters :[
        {key: 1, value: 0},
        {key: 2, value: 0},
        {key: 3, value: 0},
        {key: 4, value: 0}
        ] 
     };

     handleDelete(){
        console.log("Event Handler Called")

     }
    render() { 
        return (
            <>
                <div>
                    {this.state.counters.map(counter =><Counter key = {counter.key} value = {counter.value} id = {counter.key} onDelete = {this.handleDelete}/>)} 
                </div>

                
            </>
        );
    }
}
 
export default Counters;
