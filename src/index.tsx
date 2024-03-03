import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el as HTMLElement);

root.render(<App />);
