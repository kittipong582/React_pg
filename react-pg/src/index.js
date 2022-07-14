import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import HelloHome from './component/homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = ReactDOM.createRoot(document.getElementById('data'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
data.render(
  <React.StrictMode>
    <HelloHome />
  </React.StrictMode>
)

reportWebVitals();
