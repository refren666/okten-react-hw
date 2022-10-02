import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { history } from './services';

// unstable_HistoryRouter is used to integrate history library into react routes
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
);
