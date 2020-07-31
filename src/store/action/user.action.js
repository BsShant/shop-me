import {SET_LOGGED_USER, TOGGLE_USER_DROPDOWN, CHOOSE_FILE} from './actionTypes';


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
export const chooseFile = (file) =>{
    console.log("files dispatched",file)
    return{
        type: CHOOSE_FILE,
        payload: file
    }
}
