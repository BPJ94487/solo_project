import { combineReducers } from 'redux';


const runHistoryReducer = (state = {}, action) => {
    // console.log(action.payload);
    
    switch (action.type) {
      case 'EDIT_RUN_HISTORY':
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
    runHistoryReducer,
    
  });