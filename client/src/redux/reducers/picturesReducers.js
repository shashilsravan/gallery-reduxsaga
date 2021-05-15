import * as type from '../constants/types';

const initialState = {
    pictures: [], loading: false, error: null
}

export function getPicturesReducers(state = initialState, action){
    switch(action.type){
        case type.GET_PICTURES_REQUESTED:
            return {...state, loading: true }
        case type.GET_PICTURES_SUCCESS:
            return {...state, loading: false, pictures: action.pictures}
        case type.GET_PICTURES_FAIL:
            return {...state, error: action.message, loading: false}
        default:
            return state
    }
}

export function postPicturesReducers(state = {
    success: false, loading: false, error: null
}, action){
    switch(action.type){
        case type.POST_PICTURES_REQUESTED:
            return {...state, loading: true, success: false }
        case type.POST_PICTURES_SUCCESS:
            return {...state, loading: false, success: true}
        case type.POST_PICTURES_FAILED:
            return {...state, error: action.message, loading: false}
        default:
            return state
    }
}

export function deletePicturesReducers(state = {success: false, loading: false, error: null}, action){
    switch(action.type){
        case type.DELETE_PICTURES_REQUESTED:
            return {...state, loading: true, success: false}
        case type.DELETE_PICTURES_SUCCESS:
            return {...state, loading: false, success: true}
        case type.DELETE_PICTURES_FAILED:
            return {...state, error: action.message, loading: false}
        default:
            return state
    }
}

export function editPicturesReducers(state = {
    success: false, loading: false, error: null }, action){
    switch(action.type){
        case type.EDIT_PICTURES_REQUESTED:
            return {...state, loading: true, success: false}
        case type.EDIT_PICTURES_SUCCESS:
            return {...state, loading: false, success: true}
        case type.EDIT_PICTURES_FAILED:
            return {...state, error: action.message, loading: false}
        default:
            return state
    }
}