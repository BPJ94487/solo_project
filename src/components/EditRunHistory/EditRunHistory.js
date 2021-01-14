import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name EditRunHistory with the name for the new
// component.
class EditRunHistory extends Component {
  state = {
    heading: 'Class Component',
  };

  backButton = () => {
    this.props.history.push('/history');
}

  render() {
    return (
      <div>
        <h1>EditRunHistory</h1>
        <button onClick={this.backButton}>Back</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditRunHistory);