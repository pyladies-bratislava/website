import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/tangerine-v12-latin-regular.ttf'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
