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
        <div className="cart-dropdown" ref={dropdown}>
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
            
            <Checkout style={
                {
                    boxShadow: `1px 5px 2px rgba(0,0,0,0.5)`
                }
            }
            onMouseUp={() =>
            {history.push('/checkout')
            return props.toggleCartDropdown()}}>
                Checkout</Checkout>
        </div>
        

    )
}
const mapStateToProps = state =>({
    items: cartItem(state)
})
const mapDispatchToProps = dispatch =>({
    toggleCartDropdown : () => dispatch(cartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
