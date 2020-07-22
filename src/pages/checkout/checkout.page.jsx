import React from 'react';
import './checkout.styles.scss';
import { connect} from 'react-redux';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import { cartItem, totalPrice } from '../../store/selectors/cart.selector';
import {createStructuredSelector} from 'reselect';

const Checkout = (props) =>{
    return(
        <div className="checkout-page">
            <div className="checkout-item-conatiner">
                <div className="checkout-items-title">
                    <div>Product</div>
                    <div>Description</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Remove</div>
                </div>
               {
                   props.items.map(item=>{
                        return <CheckoutItems item={item} />
                   })
               }
               <div className="total-price">
                   TOTAL: ${
                      
                      props.total
                       
                       
                   }
               </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: cartItem,
    total: totalPrice
})

export default connect(mapStateToProps)(Checkout);