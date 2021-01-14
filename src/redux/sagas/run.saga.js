import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCurrentRunList(action) {

    if ( action.type === 'GET_CURRENT_RUN_LIST' ){
        console.log('made it to the getCurrentRunListSaga');
        
        try{
            const response = yield axios.get(`this is the route to get the stuff`)
            console.log(response);
            
            yield put({ type: 'FETCH_RUNS', payload: response.data})
        } catch ( error ) {
            console.log('error with the get request', error);
            
        }
    }
}

function* runSaga() {
    yield takeEvery('GET_CURRENT_RUN_LIST', getCurrentRunList)
}

export default runSaga; 