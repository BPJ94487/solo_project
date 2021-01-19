import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name EditRunHistory with the name for the new
// component.
class EditRunHistory extends Component {

  componentDidMount() {
    if (this.state.serial_id === undefined) {
      this.props.history.push('/history');
    }
  }



  state = {
    user_id: this.props.store.user.id,
    name: this.props.store.runHistoryReducer.runHistoryReducer.history_name,
    date: this.props.store.runHistoryReducer.runHistoryReducer.workout_date,
    distance: this.props.store.runHistoryReducer.runHistoryReducer.workout_distance,
    difficulty: this.props.store.runHistoryReducer.runHistoryReducer.workout_difficulty,
    location: this.props.store.runHistoryReducer.runHistoryReducer.history_location,
    description: this.props.store.runHistoryReducer.runHistoryReducer.workout_description,
    stretches:'',
    serial_id: this.props.store.runHistoryReducer.runHistoryReducer.serial_id,
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
    this.props.dispatch({ type: 'EDIT_RUN_HISTORY_SAGA', payload: this.state })
    this.props.history.push('/history');
  }

  render() {
    return (
      <div>
        <h1>EditRunHistory</h1>
        <br></br>
        <label>name</label>
          <input placeholder={this.state.name}  onChange={this.handleChange('name')} />
          <br></br>
        <label>date</label>
        <input placeholder={this.state.date} onChange={this.handleChange('date')} />
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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditRunHistory);