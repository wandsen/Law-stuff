import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers.js'
import Templates from './components/templates/templates.js'
import Navbar from './components/navbar/navbar.js'
import UserForm from './components/signUp/UserForm.js'
class App extends Component {
  render() {
    return (
      <div>
        <UserForm/>
      </div>
    );
  }
}

export default App;
