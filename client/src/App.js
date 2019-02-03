import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers.js'
import Templates from './components/templates/templates.js'

class App extends Component {
  render() {
    return (
      <div>
        <Customers />
        <Templates />
      </div>
    );
  }
}

export default App;
