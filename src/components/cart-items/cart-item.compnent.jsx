import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({item}) =>{
    return(
        <div className="cart-item">
            
         <div className="cart-item-image">
             <img src={item.imageUrl} alt="cart item"/>
        </div>
        <div className="cart-item-info">
            <span>{item.name}</span>
            <span>${item.price} * {item.quantity}</span>
        
        </div>
    </div>
    )
}
export default CartItem;