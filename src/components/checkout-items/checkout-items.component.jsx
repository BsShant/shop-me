import React from 'react';
import './checkout-items.styles.scss';
import { connect } from 'react-redux';
import {removeItem,shopItem, decreaseItem} from '../../store/action/index.action';

const CheckoutItems = (props) =>{
    return(
        <div className="checkout-items">
            <div className="item-image"><img src={props.item.imageUrl} alt="Item-Image" /></div>
    <div className="item-name">{props.item.name}</div>
    <div className="item-quantity">
    <div className="increase-quantity" onClick={()=> props.decreaseItem(props.item)}>❮</div>
    <span>{props.item.quantity}</span>
    <div className="increase-quantity" onClick={()=> props.shopItem(props.item)}>❯</div>
    </div>
    <div className="item-price">${props.item.price}</div>
            <div className="item-remove" onClick={()=>props.removeItem(props.item)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    removeItem : item => dispatch(removeItem(item)),
    shopItem : item => dispatch(shopItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))

})
export default connect(null, mapDispatchToProps)(CheckoutItems);