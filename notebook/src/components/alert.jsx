import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { check1 } from './checkbox'


class Alert
    extends Component {

    render() {

        return (<div>
            <span>alert</span> <button onClick={() => alert('h')} >gb</button>

        </div>
        );
    }
    alertCondition() {
        let textAlert = check1
    }

}



export default Alert
    ;