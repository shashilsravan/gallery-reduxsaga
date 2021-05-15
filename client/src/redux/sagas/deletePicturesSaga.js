import {call, put, takeEvery} from 'redux-saga/effects'
import {deleteApi} from '../actions/requests'

function* deletePictures(action){
    try {
        yield call(deleteApi, action.payload)
        yield put({type: 'DELETE_PICTURES_SUCCESS'})
    } catch (error) {
        yield put({type: 'DELETE_PICTURES_FAILED', message: error.message})
    }
}

function* deletePicturesSaga(){
    yield takeEvery('DELETE_PICTURES_REQUESTED', deletePictures)
}

export default deletePicturesSaga;