import React from 'react';
import { CartItemContainer, CartItemInfo, CartItemImage   } from './cart-item.styles';

const CartItem = ({item}) =>{
    return(
        <CartItemContainer>
            
         <CartItemImage>
             <img src={item.imageUrl} alt="cart item"/>
        </CartItemImage>
        <CartItemInfo>
            <span>{item.name}</span>
            <span>${item.price} * {item.quantity}</span>
        
        </CartItemInfo>
    </CartItemContainer>
    )
}
export default CartItem;