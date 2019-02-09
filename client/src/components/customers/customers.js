import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);   
    this.state={
      fullName:'null'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.inputFullNameRef = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    
  }
    
  handleInputChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  componentDidMount(){
    this.inputFullNameRef.current.focus()
  }

  render() {
    const {fullName} = this.state
    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>Full name is {fullName}</p>
        <form onSubmit = {this.handleSubmit}>
          <input ref={this.inputFullNameRef} type ='text' placeholder='Your Name' name='fullName' onChange={this.handleInputChange}/>
          <button>Submit</button>
        </form>
      </div>

    );
  }
}

export default Customers;