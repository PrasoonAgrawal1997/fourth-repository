import { DATA_LOADED } from "./RouterAction";

const initialState = {
    users : []
  };
   
  function rootReducer(state = initialState, action) {
    if(action.type===DATA_LOADED){
        return{
            ...state,
            users:[],
            //users: state.users.concat(action.payload) 
            //users: state.users.splice(1, state.users.length, action.payload) 
            users:action.payload
        }
        } 
    return state  
    };
      
export default rootReducer; 
    