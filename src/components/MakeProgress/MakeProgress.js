import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name MakeProgress with the name for the new
// component.
class MakeProgress extends Component {
  state = {
      date: '',
      departureTime: '',
      returnTime: '',
      distance: '',
      description: ''
  };

  addProgress = () => {
    this.props.dispatch({ type: 'MAKE_PROGRESS', payload: this.state })
  }

  handleChange = name => event => {
      this.setState({ [name]: event.target.value });
  }

  backButton = () => {
      this.props.history.push('/home');
  }



  render() {
    console.log(this.state);
    return (
      <div>
          <h1>MakeProgress</h1>
          <input placeholder='date' onChange={this.handleChange('date')} />
          <br></br>
          <input placeholder='departure'  onChange={this.handleChange('departureTime')} />
          <br></br>
          <input placeholder='return' onChange={this.handleChange('returnTime')} />
          <br></br>
          <input placeholder='distance' onChange={this.handleChange('distance')} />
          <br></br>
          <input placeholder='dropdownSelection' />
          <br></br>
          <textarea onChange={this.handleChange('description')} />   
          <br></br>    
          <button onClick={this.addProgress}>Add</button>  
          <button onClick={this.backButton}>Back</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MakeProgress);