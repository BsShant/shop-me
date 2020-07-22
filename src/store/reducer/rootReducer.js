import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import {toggleCartDropdown, shopItemReducer} from './cartReducer';

export default combineReducers({
    user: userReducer,
    toggleCart: toggleCartDropdown,
    shopItem: shopItemReducer,
   
})
