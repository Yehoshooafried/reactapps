import React, { Component } from 'react'
import ReactDOM from 'react-dom';
 let check1 = false;

// const checkbox = document.querySelector("input[name=checkbox]");

class CheckBox
    extends Component {
   render() {
  const  checkbox = document.querySelectorAll("input[name=checkbox]");
  console.log(checkbox[0].checked);

        return (<div>
        <h1>list</h1>
        <span>notebook </span><input  type="Checkbox"  name="checkbox" /><br />
        <span>pen </span><input type="Checkbox"  name="checkbox"/><br />
        <span>computer </span><input type="Checkbox"  name="checkbox"/><br />
        </div>
        );
    }
}


// assignCheckbox(check1)


// function assignCheckbox(check){
//   checkbox.addEventListener('change', function() {
//     if (this.checked) {
//       check = true;
//     } else {
//         check = false;
//     }
//   });  
// }



export  {CheckBox, check1}
    