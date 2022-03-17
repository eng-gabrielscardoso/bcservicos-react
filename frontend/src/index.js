import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

import 'animate.css';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
