import * as type from '../constants/types'

export const getPictures = () => {
    return {
        type: type.GET_PICTURES_REQUESTED 
    }
}

export const postPictures = (data) => {
    return {
        type: type.POST_PICTURES_REQUESTED,
        payload: data
    }
}

export const deletePictures = (id) => {
    return {
        type: type.DELETE_PICTURES_REQUESTED,
        payload: id
    }
}

export const editPictures = (data) => {
    return {
        type: type.EDIT_PICTURES_REQUESTED, payload: data
    }
}