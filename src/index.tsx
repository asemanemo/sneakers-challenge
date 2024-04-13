import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/index';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
