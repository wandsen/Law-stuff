import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText ="Enter your First Name"
            floatingLabelText ="Occupation"
            onChange = {handleChange('occupation')}
            defaultValue ={values.firstName}
          />
          <br/>
          <TextField
            hintText ="Enter your City"
            floatingLabelText ="City"
            onChange = {handleChange('city')}
            defaultValue ={values.lastName}
          />
          <br/>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick = {this.back}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick = {this.continue}
          />        
          
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button:{
    margin: 15
  }
}

export default FormPersonalDetails
