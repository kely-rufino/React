import React from 'react';
import ReactDOM from 'react-dom';
import './Components/Article.css';
import reportWebVitals from './reportWebVitals';
import Article from "./Components/Article";

ReactDOM.render(
  <React.StrictMode>
    <Article />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
