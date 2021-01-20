import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';




// Material UI stuff
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


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

editHistory = (run) => {  
  this.props.dispatch({ type: 'EDIT_RUN_HISTORY', payload: run });
  this.props.history.push('/editrunhistory');
}




  render() {
    return (
      <div>    
        <h1>Run History</h1>
        <Table>
          <TableHead>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Effort</TableCell>
            <TableCell>Distance</TableCell>
          </TableHead>
          <TableBody>
            {this.props.store.runReducer.historyReducer.map((run, index) => {
              return <TableRow key={index} onClick={ () => this.editHistory(run)}>
                      <TableCell>{run.workout_date}</TableCell>
                      <TableCell>{run.history_name}</TableCell>
                      <TableCell>{run.workout_difficulty}</TableCell>
                      <TableCell>{run.workout_distance}</TableCell>
                    </TableRow>;
              })}
          </TableBody>
        </Table>     
        <Button variant="contained" onClick={ () => this.navigate('/home') }>Back</Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(History);

