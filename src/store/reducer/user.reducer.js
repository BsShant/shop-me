import {SET_LOGGED_USER, TOGGLE_USER_DROPDOWN} from '../action/actionTypes';
import { toggleUserDropdown } from '../action/user.action';

const INITIAL_STATE ={
    loggedUser: null,
    toggleUserDropdown: false
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SET_LOGGED_USER:
            return{
                ...state,
                loggedUser: action.payload
            }
        case TOGGLE_USER_DROPDOWN:
            return{
                ...state,
                toggleUserDropdown: !state.toggleUserDropdown
            }
        default:
            return state;
    }
}
export default userReducer;