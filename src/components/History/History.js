import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name History with the name for the new
// component.
class History extends Component {
  state = {
    heading: 'Class Component',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_RUN_HISTORY', payload: this.props.store.user.id })
}


  navigate = (web_address) => {
    this.props.history.push(web_address)
  };

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.props.store.user.id )} */}
        {JSON.stringify(this.props.store.runReducer.historyReducer)}



          <h1>Run History</h1>
          <button onClick={ () => this.navigate('/editrunhistory') }>EditRunHistory</button>
          <button onClick={ () => this.navigate('/home') }>Back</button>
        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(History);