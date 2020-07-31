import {TOGGLE_CART_DROPDOWN, SHOP_ITEM_SELECTED, TOTAL_CART_ITEMS, REMOVE_CART_ITEM, DECREASE_ITEM_QUANTITY} from './actionTypes';

export const cartDropdown = () =>{
    return{
        type: TOGGLE_CART_DROPDOWN
    }
}

export const shopItem = (item) => {
    return{
        type: SHOP_ITEM_SELECTED,
        payload: item
    }
}
export const totalItems = () =>{
    return{
        type: TOTAL_CART_ITEMS
    }
}
export const removeItem = item =>{
    return{
        type: REMOVE_CART_ITEM,
        payload: item
    }
}

export const decreaseItem = item =>{
    return{
        type: DECREASE_ITEM_QUANTITY,
        payload: item
    }
}