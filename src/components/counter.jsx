import React, { Component } from 'react'
class Counter extends Component {
    state = { 
        count : 0,
        tags : ['tag1', 'tag', 'tag3']

     }

     renderTags(){
        if(this.state.tags.length === 0){
            return(<p>There are no tags</p>);
        }

        else{
            return(this.state.tags.map(tag => <li key = {tag}>{tag}</li>));
        }
     }
     
    render() { 
        return (
            <>
                <div>
                    {this.renderTags()}
                </div>
                
            </>
        );
    }
}
 
export default Counter;