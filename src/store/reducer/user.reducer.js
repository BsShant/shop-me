import {SET_LOGGED_USER} from '../action/actionTypes';

const INITIAL_STATE ={
    loggedUser: null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SET_LOGGED_USER:
            return{
                ...state,
                loggedUser: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;