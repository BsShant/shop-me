import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {toggleCartDropdown, shopItemReducer} from './cartReducer';
import { menuItemsReducer } from './menuItemsReducer';
import { shopDataReducer } from './shopDataReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shopItem']
  }

const rootReducer = combineReducers({
    user: userReducer,
    toggleCart: toggleCartDropdown,
    shopItem: shopItemReducer,
    menuItems: menuItemsReducer,
    shopData: shopDataReducer
   
})

export default persistReducer(persistConfig, rootReducer);

