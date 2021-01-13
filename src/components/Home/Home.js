import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
// Material-UI stuff
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import image from '../../../public/Images/make_progress';


class Home extends Component {

  navigate = (web_address) => {
    this.props.history.push(web_address)
  };




  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />




        <button onClick={this.navigate('/make_progress') }>MakeProgress</button>
        {/* <button onClick={this.navigate('/repeatrunlist')}>RepeatRuns</button> */}
        <center>
          <Card raised='true'>
            <CardHeader title='Make Progress' />
            <CardMedia 
              component="img"
              width='200'
              height='200'
              alt='running through mountains'
              image='../../../public/Images/make_progress'
            />
            
          
          </Card>
        </center>

      </div>
    );
  }
}


// this allows us to use <App /> in index.js
export default connect(mapStoreToProps) (Home);
