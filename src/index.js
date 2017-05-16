import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Sgames = () => (
  <Router>
    <App />
  </Router>
);

render(
  <Sgames />,
  document.getElementById('app')
);
