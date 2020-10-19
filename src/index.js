import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './router/appRouter';
import { Provider } from 'react-redux';
import store from './redux/store/store';
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

