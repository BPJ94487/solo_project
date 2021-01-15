import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name RepeatRunListItem with the name for the new
// component.
class RepeatRunListItem extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div>
        <li>Name: {this.props.route.workout_name}, Location: {this.props.route.workout_location}</li>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RepeatRunListItem);