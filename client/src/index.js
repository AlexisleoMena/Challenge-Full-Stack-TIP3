import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import App from './App';
import './index.css';

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

