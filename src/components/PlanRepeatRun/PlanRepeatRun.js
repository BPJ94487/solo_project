import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material UI stuff
import TextField from '@material-ui/core/TextField';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name PlanRepeatRun with the name for the new
// component.
class PlanRepeatRun extends Component {
  state = {
    user_id: "",
    name: "",
    distance: "",
    difficulty: "",
    location: "",
    description: "",
    stretches: "",
  };

  saveButton = () => {
    this.props.dispatch({ type: 'EDIT_REPEAT_RUNS', payload: this.state }) 
    let user_id = this.props.store.user.id;
  this.setState({ user_id: this.props.store.user.id })
    this.props.history.push('/repeatrunlist');
  }

  backButton = () => {
    this.props.history.push('/repeatrunlist');
}

handleChange = name => event => {
this.setState({ [name]: event.target.value });
let user_id = this.props.store.user.id;
  this.setState({ user_id: this.props.store.user.id })
}

  render() {
    console.log(this.state)
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
              type="Distance"
              value={this.state.distance}
              onChange={this.handleChange('distance')}
              margin="normal"
              variant="outlined"
            />
          <br></br> 
          <TextField        
              style={{margin: 7 , width: "15%"}}     
              label="Difficulty"
              type="Difficulty"
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






        <button onClick={this.backButton}>Cancle</button>
        <button onClick={this.saveButton}>Save</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PlanRepeatRun);