import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//  Material-UI stuff
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (          
     <form className="formPanel"  onSubmit={this.login}>   
      <h1>Login</h1>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
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
        <Fab variant="extended" className="btn" type="submit" name="submit" value="Log In" >
        Login
        </Fab>
          {/* <input className="btn" type="submit" name="submit" value="Log In" /> */}
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
