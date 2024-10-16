export {default as Register} from '../page/register.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../assets/ProjectCSS/Login.css';
import '../assets/ProjectCSS/Homepage.css';
import Login from './Login.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
