import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import cookies from './cookies';

var START_PHASE = 0

var current_phase = parseInt(cookies.getCookie("phase", START_PHASE));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App phase={current_phase}/>
  </React.StrictMode>
);

serviceWorkerRegistration.register();