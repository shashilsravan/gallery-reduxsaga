import {all} from 'redux-saga/effects'
import getPicturesSaga from './getPicturesSaga'
import postPicturesSaga from './postPicturesSaga'
import deletePicturesSaga from './deletePicturesSaga'
import editPicturesSaga from './editPictures'

export default function* rootSaga() {
    yield all([
        getPicturesSaga(), postPicturesSaga(), deletePicturesSaga(), editPicturesSaga()
    ])
}
