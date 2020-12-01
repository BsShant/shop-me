import shopData from '../../pages/shop/shop-data';
import {FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from '../action/actionTypes';

const INITIAL_STATE ={
  shopData : shopData,
  isFetching : false,
  errorMessage : undefined


  }

    export const shopDataReducer = (state= INITIAL_STATE, action) =>{
        switch(action.type){
          case FETCH_COLLECTIONS_START:
            return{
              ...state,
              isFetching: true
            }
            case FETCH_COLLECTIONS_SUCCESS:
            return{
              ...state,
              isFetching:false,
              shopData: action.payload
            }
            case FETCH_COLLECTIONS_FAILURE:
              return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
              }
            default:
                return state
        }
    }