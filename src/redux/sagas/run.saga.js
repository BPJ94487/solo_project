import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCurrentRunList(action) {

    if ( action.type === 'GET_CURRENT_RUN_LIST' ){      
        try{
            
            const response = yield axios.get(`/api/run/${action.payload}`)
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