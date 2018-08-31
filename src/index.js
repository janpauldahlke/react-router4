import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App'

const targetNode = document.getElementById('app');

if (targetNode) {
    ReactDOM.render(<App />, targetNode);
}