import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.debug("src/index.js invoked");

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
