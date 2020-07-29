import {SET_LOGGED_USER, TOGGLE_USER_DROPDOWN} from './actionTypes';


export const setLoggedUser = (user) =>{
    return{
        type: SET_LOGGED_USER,
        payload: user
    }
}
export const toggleUserDropdown = () =>{
    return{
        type: TOGGLE_USER_DROPDOWN
    }
}
