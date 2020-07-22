import {SET_LOGGED_USER} from './actionTypes';


export const setLoggedUser = (user) =>{
    return{
        type: SET_LOGGED_USER,
        payload: user
    }
}
