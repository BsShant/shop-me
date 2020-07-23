import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import persistedReducer from './reducer/rootReducer';
import {persistStore} from 'redux-persist';


const middleware= [logger];


const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);
export {store, persistor};