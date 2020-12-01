import React from 'react';
import { CartDropdownContainer, CartDropdownList } from './cart-dropdown.styles';
import Checkout from '../customButton/customButton.component';
import { connect} from 'react-redux';
import CartItem from '../cart-items/cart-item.compnent';
import { cartDropdown } from '../../store/action/index.action';
import { useHistory }from 'react-router-dom';
import { cartItem } from '../../store/selectors/cart.selector';
import { useRef } from 'react';



const CartDropdown = (props) =>{
    
        const handleDropdown = (event) =>{
        if(dropdown.current && !dropdown.current.contains(event.target)){
            props.toggleCartDropdown();
        }
    }
    React.useEffect( () =>{
        window.addEventListener('mousedown', handleDropdown)

        return () => window.removeEventListener('mousedown', handleDropdown)
    }, [])

const history = useHistory();
const dropdown = useRef(null)
    return(
        <CartDropdownContainer ref={dropdown}>
            <CartDropdownList>
            
                {
                    props.items.length?
                   
                    props.items.map(item =>{
                     
                       return <CartItem key={item.id} item={item}/>
                    })
                    :
                    <p>cart is empty</p>
                    
                
                }
                
                   
            
            </CartDropdownList>
            
            <Checkout
            onMouseUp={() =>
            {history.push('/checkout')
            return props.toggleCartDropdown()}}>
                Checkout</Checkout>
        </CartDropdownContainer>
        

    )
}
const mapStateToProps = state =>({
    items: cartItem(state)
})
const mapDispatchToProps = dispatch =>({
    toggleCartDropdown : () => dispatch(cartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
