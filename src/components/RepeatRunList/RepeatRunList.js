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
    this.props.dispatch({ type: 'GET_CURRENT_RUN_LIST', payload: this.props.store.user.id })
}

navigate = (web_address) => {
    this.props.history.push(web_address)
  };

  render() {
    return (
      <div>

        
            <>
            {JSON.stringify( this.props.store.user.id )}
            </>
        

        <h1>RepeatRunList</h1>
        <button onClick={ () => this.navigate('/planrepeatrun')}>PlanRepeatRun</button>
        <button onClick={ () => this.navigate('/home')}>Back</button>


      </div>
    );
  }
}

export default connect(mapStoreToProps)(RepeatRunList);