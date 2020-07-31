import {SET_LOGGED_USER, TOGGLE_USER_DROPDOWN, CHOOSE_FILE} from '../action/actionTypes';

const INITIAL_STATE ={
    loggedUser: null,
    file: null,
    toggleUserDropdown: false,
    
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
            case CHOOSE_FILE:
                return{
                    ...state,
                    file: action.payload
                }
        default:
            return state;
    }
}
export default userReducer;