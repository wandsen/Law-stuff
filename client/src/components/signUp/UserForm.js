import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails.js'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm.js'
import Success from './Success.js'

export class UserForm extends Component {
    state = {
      step: 1,
      firstName: '',
      lastName:'',
      email:''
    }

    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step +1
      });
    }
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step -1
      });
    }

    handleChange = input => event => {
      this.setState({
        [input]: event.target.value
      });
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email} = this.state;
        const values = { firstName, lastName, email}

        // eslint-disable-next-line default-case
        switch(step){
          case 1:
            return(
              <FormUserDetails 
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
              />
            )
          case 2:
            return(
              <FormPersonalDetails 
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
              />
            )
          case 3:
          return(
            <Confirm
              nextStep = {this.nextStep}
              prevStep = {this.prevStep}
              values = {values}
            />
          )
          case 4:
            return (
            <Success/>
            )
          
        }

    }
}

export default UserForm
