import React, { Component } from 'react';
import './templates.css';
import LetterOne from './letterOfDemand/letterOne.js';

class Templates extends Component {
  constructor() {
    super();
    this.state={}
  }
    
  render() {
    return (
      <div>
        <h1>Templates</h1>
        <LetterOne />
      </div>
    );
  }
}

export default Templates;