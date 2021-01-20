import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material UI stuff
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name PlanRepeatRun with the name for the new
// component.
class PlanRepeatRun extends Component {
  state = {
    serial_id: "",
    name: "",
    distance: "",
    difficulty: "",
    location: "",
    description: "",
    stretches: "",
  };

  componentDidMount(){
    if (this.props.store.runReducer.editRepeatRunReducer.serial_id !== undefined ) {
        this.setState({
          serial_id: this.props.store.runReducer.editRepeatRunReducer.serial_id,
          name: this.props.store.runReducer.editRepeatRunReducer.workout_name,
          distance: this.props.store.runReducer.editRepeatRunReducer.workout_distance,
          difficulty: this.props.store.runReducer.editRepeatRunReducer.workout_difficulty,
          location: this.props.store.runReducer.editRepeatRunReducer.workout_location,
          description: this.props.store.runReducer.editRepeatRunReducer.workout_description,
          stretches: this.props.store.runReducer.editRepeatRunReducer.stretches
        })
    }
  }

  saveButton = () => {
    if(this.props.store.runReducer.editRepeatRunReducer.serial_id === undefined){
        this.props.dispatch({ type: 'EDIT_REPEAT_RUNS', payload: this.state })         
        this.setState({ user_id: this.props.store.user.id })
        this.props.dispatch({type: 'UNSET_REPEAT_RUN'})
        this.props.history.push('/repeatrunlist');
    } else {
        this.props.dispatch({ type: 'PUT_ROUTE_REPEAT', payload: this.state }) 
        this.setState({ user_id: this.props.store.user.id })
        this.props.dispatch({type: 'UNSET_REPEAT_RUN'})
        this.props.history.push('/repeatrunlist');
    }
  }

  deleteButton = () => {
    this.props.dispatch ({type: 'DELETE_REPEAT_RUN', payload: this.state.serial_id});
    this.props.history.push('/repeatrunlist');
  }

  backButton = () => {
    this.props.dispatch({type: 'UNSET_REPEAT_RUN'})
    this.props.history.push('/repeatrunlist');
  }

  handleChange = name => event => {
  this.setState({ [name]: event.target.value });
    this.setState({ user_id: this.props.store.user.id })
  }

  render() {
    return (
      <div>
        <h1>Plan Repeat Run</h1>
        <TextField        
              style={{margin: 7 , width: "15%"}}     
              label="Name"
              type="Name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          <br></br> 
          <TextField        
              style={{margin: 7 , width: "15%"}}     
              label="Distance"
              type="Number"
              value={this.state.distance}
              onChange={this.handleChange('distance')}
              margin="normal"
              variant="outlined"
            />
          <br></br> 
          <TextField        
              style={{margin: 7 , width: "15%"}}     
              label="Difficulty"
              type="Number"
              value={this.state.difficulty}
              onChange={this.handleChange('difficulty')}
              margin="normal"
              variant="outlined"
            />
          <br></br> 
          <TextField        
              style={{margin: 7 , width: "15%"}}     
              label="Location"
              type="Location"
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
              style={{margin: 7 , width: "50%", height: "100px", alignContent: 'flex-end' }}       
              label="Description"
              type="Description"
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin="normal"
              variant="outlined"
            />    
            <br></br>

            <TextField   
              id="outlined-multiline-flexible"
              multiline
              rowsMax="4"
              style={{margin: 7 , width: "50%", height: "100px", alignContent: 'flex-end' }}       
              label="Stretches"
              type="Stretches"
              value={this.state.stretches}
              onChange={this.handleChange('stretches')}
              margin="normal"
              variant="outlined"
            />    
            <br></br>

        <Button variant="contained" onClick={this.backButton}>Back</Button>
        <center>
          <Button variant="contained" onClick={this.saveButton}>Save</Button>
        </center>
        
          <Button variant="contained" onClick={this.deleteButton}>Delete</Button>
        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PlanRepeatRun);