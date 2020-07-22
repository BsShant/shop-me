import React from 'react';
import './cart-dropdown.styles.scss';
import Checkout from '../customButton/customButton.component';
import { connect} from 'react-redux';
import CartItem from '../cart-items/cart-item.compnent';
import { cartDropdown } from '../../store/action/index.action';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory
}
    from 'react-router-dom';
import { cartItem } from '../../store/selectors/cart.selector';


const CartDropdown = (props) =>{
    
const history = useHistory();
    return(
        <div className="cart-dropdown" >
            <div className="cart-dropdown-list">
            
                {
                    props.items.length?
                   
                    props.items.map(item =>{
                     
                       return <CartItem item={item}/>
                    })
                    :
                    <p>cart is empty</p>
                    
                
                }
                
                   
            
            </div>
            
            <Checkout 
            onClick={() =>
            {history.push('/checkout')
            return props.dispatch(cartDropdown())}}>
                Checkout</Checkout>
        </div>
        

    )
}
const mapStateToProps = state =>({
    items: cartItem(state)
})

export default connect(mapStateToProps)(CartDropdown);
