import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name RepeatRunList with the name for the new
// component.
class RepeatRunList extends Component {
  state = {
    heading: 'Class Component',
  };
componentDidMount() {
    this.props.dispatch({ type: 'GET_CURRENT_RUN_LIST' })
}

  render() {
    return (
      <div>
          
        <h1>RepeatRunList</h1>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(RepeatRunList);