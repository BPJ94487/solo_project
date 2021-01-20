import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// Material UI stuff
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

        <TextField         
              style={{margin: 7 , width: "15%"}}    
              label="Name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          <br></br>

          <TextField         
              style={{margin: 7 , width: "15%"}}    
              // label="Date"
              type="Date"
              value={this.state.date}
              onChange={this.handleChange('date')}
              margin="normal"
              variant="outlined"
            />
          <br></br>

          <TextField         
              style={{margin: 7 , width: "15%"}}    
              label="Distance"
              type="number"
              value={this.state.distance}
              onChange={this.handleChange('distance')}
              margin="normal"
              variant="outlined"
            />
          <br></br>
        
          <TextField         
              style={{margin: 7 , width: "15%"}}    
              label="Difficulty 1-10"
              type="number"
              value={this.state.difficulty}
              onChange={this.handleChange('difficulty')}
              margin="normal"
              variant="outlined"
            />
          <br></br>
        
          <TextField         
              style={{margin: 7 , width: "15%"}}    
              label="Location"
              type="text"
              value={this.state.location}
              onChange={this.handleChange('location')}
              margin="normal"
              variant="outlined"
            />
          <br></br>
          
          <TextField   
              id="outlined-multiline-flexible"
              multiline
              rowsMax="4"
              style={{margin: 7 , width: "50%", height: "70px"}}         
              label="Description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin="normal"
              variant="outlined"
            />    
            <br></br>      
        
            <Button variant="contained"  onClick={this.backButton}>Back</Button>
            <center>
            <Button variant="contained"  onClick={this.makeEdit}>Submit Changes</Button>
            </center>

        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditRunHistory);