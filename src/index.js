import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HelloComponent from './components/HelloComponent';
import reportWebVitals from './reportWebVitals';
import App from './App';

//การสร้างClass Component
// class HelloComponent extends React.Component{
//     render(){
//       return <h1>สวัสดี component สร้างด้วยclass</h1>
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloComponent/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
