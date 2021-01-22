import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material UI stuff
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Map from '../GoogleMap/GoogleMap'
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name MakeProgress with the name for the new
// component.

class MakeProgress extends Component {
  state = {
      user_id: this.props.store.user.id,
      date: '',
      departureTime: '',
      returnTime: '',
      distance: '',
      description: '',
      location: '',
      rating: '',
      pace: '',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_CURRENT_RUN_LIST', payload: this.props.store.user.id })
}

  addProgress = () => {
    this.props.dispatch({ type: 'MAKE_PROGRESS', payload: this.state })
    this.props.history.push('/home');
  }

  handleChange = name => event => {
      this.setState({ [name]: event.target.value });
      if(event.target.value.serial_id !== undefined){
        console.log('this is working');
        this.setState({ name: event.target.value.workout_name,
                        location: event.target.value.workout_location,
                        description: event.target.value.workout_description,
                        distance: event.target.value.workout_distance,
        })
      }
  }

  backButton = () => {
      this.props.history.push('/home');
  }
 

  render() {
    console.log(this.state);    
    return (
      <div>
          <h1>MakeProgress</h1>


          
        <div>
          <Map/>
        </div>



          <TextField
              style={{margin: 7 , width: "15%"}}
              id="outlined-select-currency"
              select
              label="Select"              
              // value={this.state.run}
              onChange={this.handleChange('')}              
              helperText="Repeat run"
              margin="normal"
              variant="outlined"
            >
              {this.props.store.runReducer.repeatRunReducer.map(option => (
                <MenuItem key={option.serial_id} value={option}>
                  {option.workout_name}
                </MenuItem>
              ))}
            </TextField>
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
              label="Departure"
              type="Time"
              value={this.state.departureTime}
              onChange={this.handleChange('departureTime')}
              margin="normal"
              variant="outlined"
            />
            <br></br>

            <TextField            
              style={{margin: 7 , width: "15%"}} 
              label="Return"
              type="Time"
              value={this.state.returnTime}
              onChange={this.handleChange('returnTime')}
              margin="normal"
              variant="outlined"
            />
          <br></br>

          <TextField   
              style={{margin: 7 , width: "15%"}}          
              label="Effort 1-10 "
              type="Number"
              value={this.state.rating}
              onChange={this.handleChange('rating')}
              margin="normal"
              variant="outlined"
            />
          <br></br>

          <TextField            
              style={{margin: 7 , width: "15%"}} 
              label="Distance"
              type=""
              value={this.state.distance}
              onChange={this.handleChange('distance')}
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
              style={{margin: 7 , width: "50%", height: "70px"}}         
              label="Description"
              type="Description"
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin="normal"
              variant="outlined"
            />    
            <br></br>       
          <Button variant="contained" onClick={this.backButton}>Back</Button>
          <center>
            <Button variant="contained" onClick={this.addProgress}>Add</Button>  
          </center>
      </div>      
    );
  }
}

export default connect(mapStoreToProps)(MakeProgress);