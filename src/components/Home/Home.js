import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageMakeProgress from './images/make_progress.jpg'
import ImageRepeatRun from './images/repeat_run_background.jpg';
import ImageHistory from './images/history_background.jpg';
// import { withRouter } from 'react-router-dom';

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

  componentDidMount() {
    this.props.dispatch({ type: 'GET_CURRENT_RUN_LIST', payload: this.props.store.user.id })
}


  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    // const { classes } = this.props;
    return (
      <div >
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>        
       
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
                  image= {ImageMakeProgress}
                />
              </center>
            </Card>
          
            <Card raised='true' style={{width: "50%", display: 'inline-block'}}
              onClick={ () => this.navigate('/repeatrunlist') }>
              <CardHeader title='Repeat Runs' />
              <CardMedia 
                component="img"
                width='100'
                height='400'
                alt='running through mountains'
                image= {ImageRepeatRun}
              />
            </Card>

            <Card raised='true' style={{width: "50%", display: 'inline-block', border: '10px'}}
              onClick={ () => this.navigate('/history') }>
              <CardHeader title='History' />
              <CardMedia 
                component="img"
                width='100'
                height='400'
                alt='running through mountains'
                image= {ImageHistory}
              />
            </Card>           
          </div>
        <center>
          <LogOutButton className="log-in" /> 
        </center>
      </div>
    );
  }
}


// this allows us to use <App /> in index.js
export default connect(mapStoreToProps) (Home);
// export default connect(mapStoreToProps)(withRouter(Home));
