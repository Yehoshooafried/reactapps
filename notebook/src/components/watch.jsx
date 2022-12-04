import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Watch
 extends Component {
  
 
    render() { 
        return ( 
            <div>
<h3>the time is: {new Date().toLocaleTimeString()}</h3>
            </div>
         );
    }
}
 
export default Watch
;