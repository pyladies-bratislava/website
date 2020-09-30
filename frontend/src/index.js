import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import About from './About';


ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);
