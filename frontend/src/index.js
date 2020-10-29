import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import About from './About';
import Events from './Events';


ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <About />
    <Events />
  </React.StrictMode>,
  document.getElementById('root')
);
