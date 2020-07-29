import React from 'react';
import './checkout.styles.scss';
import { connect} from 'react-redux';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import { cartItem, totalPrice } from '../../store/selectors/cart.selector';
import {createStructuredSelector} from 'reselect';
import {  khaltiPay } from '../../khalti/khalti';

const Checkout = (props) =>{
    var total = props.total
    const tax = 13/100 * total 
    const sc =5
    const dc = 3
    var totalPay= total + tax + sc +dc
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
                      
                      total
                       
                       
                   }
               </div>
                
            </div>
            <form action="https://uat.esewa.com.np/epay/main" method="POST">
    <input value={totalPay} name="tAmt" type="hidden" />
    <input value={total} name="amt" type="hidden" />
    <input value={tax} name="txAmt" type="hidden" />
    <input value={sc} name="psc" type="hidden" />
    <input value={dc} name="pdc" type="hidden" />
    <input value="epay_payment" name="scd" type="hidden" />
    <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden" />
    <input value="http://merchant.com.np/page/esewa_payment_success?q=su" type="hidden" name="su" />
    <input value="http://merchant.com.np/page/esewa_payment_failed?q=fu" type="hidden" name="fu" />
   
    <button type="submit" className="esewa-button"><img src="https://uat.esewa.com.np/images/esewa-logo.png" /></button>
    </form>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: cartItem,
    total: totalPrice
})

export default connect(mapStateToProps)(Checkout);