import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Image from './images/make_progress.jpg'
// import { withRouter } from 'react-router-dom';

// Material-UI stuff
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from '@material-ui/core/ButtonBase';
// import image from '../../../public/Images/make_progress';


class Home extends Component {

  navigate = (web_address) => {
    this.props.history.push(web_address)
  };




  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    // const { classes } = this.props;
    return (
      <div >
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />


        <button onClick={ () => this.navigate('/make_progress') }>MakeProgress</button>
        <button onClick={ () => this.navigate('/repeatrunlist') }>RepeatRuns</button>
        <button onClick={ () => this.navigate('/history') }>RunHistory</button>
       
          <div maxWidth={1800} >
            
            <Card raised='true' style={{ width: "100%", height: "30%", display: 'inline-block' }}
              onClick={ () => this.navigate('/make_progress') }>
                <center>
              <CardHeader title='Make Progress' />
              <CardMedia 
                component="img"
                // width="400"
                height="400"
                alt='running through mountains'
                image= {Image}
              />
              </center>
            </Card>
          
            <Card raised='true' style={{width: "50%", display: 'inline-block'}}>
              <CardHeader title='Repeat Runs' />
              <CardMedia 
                component="img"
                width='100'
                height='400'
                alt='running through mountains'
                image= {Image}
              />
            </Card>

            <Card raised='true' style={{width: "50%", display: 'inline-block', border: '10px'}}>
              <CardHeader title='History' />
              <CardMedia 
                component="img"
                width='100'
                height='400'
                alt='running through mountains'
                image= {Image}
              />
            </Card>


            

          </div>
          
        

      </div>
    );
  }
}


// this allows us to use <App /> in index.js
export default connect(mapStoreToProps) (Home);
// export default connect(mapStoreToProps)(withRouter(Home));
