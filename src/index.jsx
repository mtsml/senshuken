import React from 'react';
import ReactDOM from 'react-dom';

import Router from './routes/Router';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/senshuken.css';

ReactDOM.render(
  <Router />,
  document.getElementById('root'),
);
