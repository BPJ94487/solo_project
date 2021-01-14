const runReducer = (state = {}, action) => {
    console.log(action.payload);
    
    switch (action.type) {
      case 'FETCH_RUNS':
        return action.payload;
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default runReducer;