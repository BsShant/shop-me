import React from 'react';
import './shopping-bag.styles.scss';
import {ReactComponent as CartIcon} from '../../images/shopping-bag.svg'
import {connect} from 'react-redux';
import {cartDropdown} from '../../store/action/index.action';
import {totalCartItems} from '../../store/selectors/cart.selector';

const ShoppingBag = (props) =>{

    
    return(
        <div className="shopping-bag" onClick={props.cartDropdown}>
            <CartIcon className="cart-icon" />
            <div className="total-item">
                {
                    
                   props.total
                    
                }
            </div>
            
           
        </div>
    )
}
const mapStateToProps = state =>({
    total : totalCartItems(state) 
})
const mapDispatchToProps = dispatch =>({
    cartDropdown: ()=>dispatch(cartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);