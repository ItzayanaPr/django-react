import React from 'react';
import ReactDOM from 'react-dom/client';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.js';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

