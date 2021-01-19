import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name EditRunHistory with the name for the new
// component.
class EditRunHistory extends Component {
  state = {
    user_id: this.props.store.user.id,
    name: this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1].history_name,
    date: this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1].workout_date,
    distance: this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1].workout_distance,
    difficulty: this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1].workout_difficulty,
    location:this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1].history_location,
    description: this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1].workout_description,
    stretches:'',
    serial_id: this.props.store.editUserTracker.editUserTracker,
  };

  backButton = () => {
    this.props.history.push('/history');
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    let user_id = this.props.store.user.id;
    this.setState({ user_id: this.props.store.user.id })
  }

  makeEdit = () => {
    this.props.dispatch({ type: 'MAKE_EDIT', payload: this.state })
    this.props.history.push('/history');
  }

  render() {
    return (
      <div>
        <h1>EditRunHistory</h1>
        <label>name</label>
          <input placeholder={this.state.name}  onChange={this.handleChange('name')} />
          <br></br>
        <label>date</label>
        <input placeholder={this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1].workout_date} onChange={this.handleChange('date')} />
          <br></br>
          <label>distance</label>
          <input placeholder={this.state.distance}  onChange={this.handleChange('distance')} />
          <br></br>
          <label>difficulty</label>
          <input placeholder={this.state.difficulty} onChange={this.handleChange('difficulty')} />
          <br></br>
          <label>location</label>
          <input placeholder={this.state.location} onChange={this.handleChange('location')} />
          <br></br>
          <label>description</label>
          <input placeholder={this.state.description} onChange={this.handleChange('description')} />
        
        <button onClick={this.backButton}>Back</button>
        <button onClick={this.makeEdit}>Submit Changes</button>

        {JSON.stringify(this.props.store.runReducer.historyReducer[(this.props.store.editUserTracker.editUserTracker)-1])}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditRunHistory);