import {FETCH_DATA_SUCCESS , FETCH_DATA_FAILURE , FETCH_DATA_REQUEST} from '../actions/actionTypes';


const initialState = {
    loading : false,
    data : [],
    error : ''
}

function apiReducer(state=initialState , action){

    switch( action.type ){
        case FETCH_DATA_REQUEST :
            return { ...state, loading : true };

        case FETCH_DATA_SUCCESS :
            return { ...state, loading : false , error : '' , data : action.payload };    
        
        case FETCH_DATA_FAILURE :
            return { ...state, loading : false , error : action.payload , data : [] };

        default :
            return state;
    }
    
}

export default apiReducer;