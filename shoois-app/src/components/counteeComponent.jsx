import React, { Component } from 'react'
class Counter extends Component {
        state = {
        count:0,
        imgUrl:'https://picsum.photos/200'
    };
    styles={
        fontSize: 50,
        fontWeight: 'bold'
    } 
    
   
   render() {
    
        return( <React.Fragment>
            {/* <img src={this.state.imgUrl} alt="" /> */}
            <span style={{fontSize: 50}} className={this.badges()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>increment</button>
            </React.Fragment>
            )
    };
    badges() {
        let classes = 'badge badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state
        return count === 0 ? 'Zero': count
    }
}

export default Counter;