import { createStore } from "redux";
import rootReducer from "./RouterReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState())})
 
export default store;     