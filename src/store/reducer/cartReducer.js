import {TOGGLE_CART_DROPDOWN, SHOP_ITEM_SELECTED, REMOVE_CART_ITEM, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY} from '../action/actionTypes';
import {addItem, removeItem, decreaseItemQuantity} from '../utils/cart.utils';

const INITIAL_STATE= {
    toggleCartDropdown: false,
    shopItem: [],
 
}

export const toggleCartDropdown = (state= INITIAL_STATE, action) =>{
    switch(action.type){
        case TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                toggleCartDropdown : !state.toggleCartDropdown
            }
        default:
            return state;

        
    }
}
export const shopItemReducer = ( state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SHOP_ITEM_SELECTED:
            
            return{
                ...state,
                shopItem: addItem(action.payload, state.shopItem),
                
            }

            case REMOVE_CART_ITEM:
            return{
                ...state,
                shopItem: removeItem(action.payload,state.shopItem)
                
            }
            case INCREASE_ITEM_QUANTITY:
                return{
                    ...state,
                    shopItem: addItem(action.payload, state.shopItem)
                }
            case DECREASE_ITEM_QUANTITY:
                return{
                    ...state,
                    shopItem: decreaseItemQuantity(action.payload, state.shopItem)
                }
        default:
            return state;
    }
}


