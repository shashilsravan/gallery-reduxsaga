import {call, put, takeEvery} from 'redux-saga/effects'
import { postApi } from '../actions/requests'


function* postPictures(action){
    try {
        yield call(postApi, action.payload)
        yield put({type: 'POST_PICTURES_SUCCESS'})
    } catch (error) {
        yield put({type: 'POST_PICTURES_FAILED', message: error.message})
    }
}

function* postPicturesSaga(){
    yield takeEvery('POST_PICTURES_REQUESTED', postPictures)
}

export default postPicturesSaga;