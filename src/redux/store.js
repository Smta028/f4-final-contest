import { createStore , applyMiddleware , combineReducers } from "redux" ;
import apiReducer  from './reducers/apiReducer.js';
import thunk from "redux-thunk";
import saveDataReducer from './reducers/saveDataReducer';

const rootReducer = combineReducers({
    data : apiReducer,
    saveData : saveDataReducer
});

const store = createStore(rootReducer , applyMiddleware(thunk));

export default store;