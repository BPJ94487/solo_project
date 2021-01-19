import { combineReducers } from 'redux';


const editUserTracker = (state = {}, action) => {
    // console.log(action.payload);
    
    switch (action.type) {
      case 'TRACK_EDIT':
        return action.payload;
      case 'UNTRACK':
        return {};
      default:
        return state;
    }
  };

 
  
  // user will be on the redux state at:
  // state.user
  export default combineReducers({
    editUserTracker,
    
  });