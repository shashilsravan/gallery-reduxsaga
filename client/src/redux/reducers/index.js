import {combineReducers} from 'redux'
import {getPicturesReducers, postPicturesReducers, 
    deletePicturesReducers, editPicturesReducers} from './picturesReducers'

const rootReducer = combineReducers({
    pictures: getPicturesReducers,
    postPictures: postPicturesReducers,
    deletePictures: deletePicturesReducers,
    editPictures: editPicturesReducers
});

export default rootReducer