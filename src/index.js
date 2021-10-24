import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Avatar from './Avatar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
//<h1>hello React</h1>,
  <React.StrictMode>
    <Avatar id="1" name="Vinod" work="Web Developer" />,
    <Avatar id="1" name="Gaura" work="Web Developer" />,
    
    <Demo name="vinod thakur thapa" />,
    <Demo name="Krishna Balram" />,
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
