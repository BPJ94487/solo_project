import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//  Material-UI stuff
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <center>
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          
        <label htmlFor="username">
          <TextField            
            label="Username"
            type="username"
            value={this.state.username}
            onChange={this.handleInputChangeFor('username')}
            margin="normal"
            variant="outlined"
            />       
          </label>
        </div>
        <div>
          <label htmlFor="password">
          <TextField    
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
              margin="normal"
              variant="outlined"
            />
            
          </label>
        </div>
        <div>
        <Fab variant="extended" className="btn" type="submit" name="submit" value="Register" >
        Register
        </Fab>
        
        </div>
        
      </form>
      </center>
      
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
