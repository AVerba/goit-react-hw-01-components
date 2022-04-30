import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
const data = require('./database/user.json');
const statisticDB = require('./database/Statistics.json');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App {...{data,statisticDB}} />
  </React.StrictMode>
);
