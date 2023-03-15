import React from 'react';

// ------------------------ external ------------------------ //

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// ------------------------ components ------------------------ //

import App from './App';

// ------------------------ styles ------------------------ //

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<BrowserRouter>

    <App />

  </BrowserRouter>

);