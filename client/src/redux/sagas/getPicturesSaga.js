import {call, put, takeEvery} from 'redux-saga/effects'
import { getApi } from '../actions/requests'


function* fetchPictures(action){
    try {
        const pictures = yield call(getApi)
        yield put({type: 'GET_PICTURES_SUCCESS', pictures: pictures})
    } catch (error) {
        yield put({type: 'GET_PICTURES_FAILED', message: error.message})
    }
}

function* getPicturesSaga(){
    yield takeEvery('GET_PICTURES_REQUESTED', fetchPictures)
}

export default getPicturesSaga;