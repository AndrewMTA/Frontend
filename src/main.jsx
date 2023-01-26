import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://ec2-100-26-243-58.compute-1.amazonaws.com:8000/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
