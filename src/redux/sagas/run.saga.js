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

function* editRepeatRun(action) {
    if (action.type === 'EDIT_REPEAT_RUNS')
    try{
        const response = yield axios.post(`/api/run`, action.payload)
    } catch ( error ) {
        console.log('error with the put request', error);
    }
}

function* deleteRepeatRun(action) {
    if( action.type=== 'DELETE_REPEAT_RUN'){
        try{
            const response = yield axios.delete(`/api/run/${action.payload}`)
        } catch ( error ) {
            console.log('error with the delete request', error);            
        }
    }
}

function* putRepeatRun(action) {
    if(action.type === 'PUT_ROUTE_REPEAT')
    try{
        const response = yield axios.put(`/api/run`, action.payload)
    } catch ( error ) {
        console.log('error with the put request', error);
    }
}

function* getRunHistory(action) {

    if ( action.type === 'GET_RUN_HISTORY'){
        try{
            const response = yield axios.get(`/api/runhistory/${action.payload}`)
            yield put({ type: 'FETCH_RUN_HISTORY', payload: response.data})
        } catch ( error ) {
            console.log('error with the get request', error);
        }
    }
}

function* addRun(action){

    if ( action.type === 'MAKE_PROGRESS'){
        try{
            const response = yield axios.post(`/api/runhistory`, action.payload)
            yield put({ type: 'GET_RUN_HISTORY'})
        } catch( error ) {
            console.log('error adding run to server', error);
        }
    }
}

function* editHistory(action){
    if ( action.type === 'EDIT_RUN_HISTORY_SAGA'){
        try{
            const response = yield axios.put(`/api/runhistory`, action.payload)
        } catch( error ) {
            console.log('error editing run on server', error);
        }
    }
}

function* runSaga() {
    yield takeEvery('GET_CURRENT_RUN_LIST', getCurrentRunList)
    yield takeEvery('GET_RUN_HISTORY', getRunHistory)
    yield takeEvery('MAKE_PROGRESS', addRun)
    yield takeEvery('EDIT_RUN_HISTORY_SAGA', editHistory)
    yield takeEvery('EDIT_REPEAT_RUNS', editRepeatRun)
    yield takeEvery('PUT_ROUTE_REPEAT', putRepeatRun)
    yield takeEvery('DELETE_REPEAT_RUN', deleteRepeatRun)
}

export default runSaga; 