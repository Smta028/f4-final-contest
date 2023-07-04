import { SAVE_DATA } from '../actions/actionTypes' ;

const initialState = [];

function saveDataReducer(state=initialState,action){
    switch(action.type){
        case SAVE_DATA:
            return action.payload;

        default:
            return state;
    }
}

export default saveDataReducer;