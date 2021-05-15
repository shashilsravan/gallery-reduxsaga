import {call, put, takeEvery} from 'redux-saga/effects'
import { editApi } from '../actions/requests'


function* editPictures(action){
    try {
        yield call(editApi, action.payload)
        yield put({type: 'EDIT_PICTURES_SUCCESS'})
    } catch (error) {
        yield put({type: 'EDIT_PICTURES_FAILED', message: error.message})
    }
}

function* editPicturesSaga(){
    yield takeEvery('EDIT_PICTURES_REQUESTED', editPictures)
}

export default editPicturesSaga;