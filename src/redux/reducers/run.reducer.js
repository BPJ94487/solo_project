import { combineReducers } from 'redux';


const repeatRunReducer = (state = [], action) => {
    
    switch (action.type) {
      case 'FETCH_RUNS':
        return action.payload;
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };

  const historyReducer = (state =[], action) => { 

    switch (action.type) {
        case 'FETCH_RUN_HISTORY':
            return action.payload;
        case 'UNSET_HISTORY':
            return {};
        default:
            return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default combineReducers({
    repeatRunReducer,
    historyReducer,
  });
  