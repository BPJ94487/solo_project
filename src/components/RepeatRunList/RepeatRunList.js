import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


// Material UI stuff
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
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
            {/* {JSON.stringify( this.props.store.user.id )} */}
            </>
        

        <h1>RepeatRunList</h1>

       {/* {JSON.stringify(this.props.store.runReducer.repeatRunReducer)} */}

       <Table>
          <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Difficulty</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Distance</TableCell>
          </TableHead>
          <TableBody>
            {this.props.store.runReducer.repeatRunReducer.map((run, index) => {
              return <TableRow key={index}>
                      <TableCell>{run.workout_name}</TableCell>
                      <TableCell>{run.workout_difficulty}</TableCell>
                      <TableCell>{run.workout_location}</TableCell>
                      <TableCell>{run.workout_distance}</TableCell>
                      <button onClick={ () => this.editHistory(run.serial_id)} >Edit</button>
                    </TableRow>;
              })}
          </TableBody>
        </Table> 



        <br></br>
        <button onClick={ () => this.navigate('/planrepeatrun')}>PlanRepeatRun</button>
        <button onClick={ () => this.navigate('/home')}>Back</button>


      </div>
    );
  }
}

export default connect(mapStoreToProps)(RepeatRunList);