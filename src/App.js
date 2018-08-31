import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './styles/index.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Sidebar /> 
        <div>
          <h1>welcome to the snackbar</h1>
        </div>
      </div>
    );
  }
}