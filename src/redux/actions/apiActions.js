import {FETCH_DATA_SUCCESS , FETCH_DATA_FAILURE , FETCH_DATA_REQUEST , SAVE_DATA} from './actionTypes';

export function fetchDataRequest(){
    return {
        type : FETCH_DATA_REQUEST
    }
}

export function fetchDataSuccess(data){
    return {
        type : FETCH_DATA_SUCCESS,
        payload : data
    }
}

export function fetchDataFailure(error){
    return {
        type : FETCH_DATA_FAILURE,
        payload : error
    }
}

export function saveData(data){
    return {
        type : SAVE_DATA,
        payload : data
    }
}