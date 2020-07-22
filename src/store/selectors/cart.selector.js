import { createSelector } from 'reselect';



export const selectCart = state => state.shopItem;
export const toggleCart = state => state.toggleCart;

export const cartItem = createSelector(
    [selectCart],
    (shopItem) => shopItem.shopItem
)

export const totalCartItems = createSelector(
    [cartItem],
    shopItem => shopItem.reduce((total, item) =>{
        return item.quantity + total
    },0)
)
export const totalPrice = createSelector(
    [cartItem],
    shopItem => shopItem.reduce((total, item) =>{
        return item.quantity* item.price + total
    },0)
)

export const toggleCartDropdown = createSelector(
    [toggleCart],
    toggleCart => toggleCart.toggleCartDropdown

)