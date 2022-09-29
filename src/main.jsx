import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AnimalsProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimalsProvider>
    <App />
  </AnimalsProvider>
);
