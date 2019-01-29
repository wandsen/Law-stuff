import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers.js'

class App extends Component {
  render() {
    return (
      <div>
        <Customers />
      </div>
    );
  }
}

export default App;
