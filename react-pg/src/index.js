import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloHome from './component/homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = ReactDOM.createRoot(document.getElementById('data'));
const data3 = ReactDOM.createRoot(document.getElementById('data3'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

data.render(
  <h1>Hello</h1>
);

data3.render(
  <HelloHome/>
)

reportWebVitals();
