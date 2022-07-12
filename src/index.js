import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyAPIApp from './MyAPIApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyAPIApp />
  </React.StrictMode>
);
