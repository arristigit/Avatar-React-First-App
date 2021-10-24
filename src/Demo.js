import React, { Component } from 'react';
// import ReactDOM from 'react-dom';    
import './Demo.css'
const Demo = ({ name }) => {
    return <div className="main_div_style">
        <h1> Hello {name}</h1>
        <h3>hlo h3 tag</h3>
        <p>Welcome to react first functional based Component</p>
    </div>
}
// const Demo = (props) => {
//     return <div className="main_div_style">
//     <h1> Hello {props.name}</h1>
//     <p>Welcome to react first functional based Component</p>
// </div>
// }
// class Demo extends Component {
//     render() {
//         return <div className="main_div_style">
//             <h1> Hello {this.props.name}</h1>
//             <p>Welcome to react first Component</p>
//         </div>
//     }
// }
export default Demo;