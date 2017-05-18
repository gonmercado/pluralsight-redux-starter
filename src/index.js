import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadCourses } from './actions/CourseActions';
import App from './components/App';

import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

const Sgames = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(
  <Sgames />,
  document.getElementById('app')
);
