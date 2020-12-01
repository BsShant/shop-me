import React from 'react';
import { CheckoutItemsContainer, CheckoutItemsField , CheckoutItemImage, ItemRemove, ItemQuantity, ItemPrice   } from './checkout-items.styles';
import { connect } from 'react-redux';
import {removeItem,shopItem, decreaseItem} from '../../store/action/index.action';

const CheckoutItems = (props) =>{
    return(
        <CheckoutItemsField>
            <CheckoutItemImage><img src={props.item.imageUrl} alt="Item" /></CheckoutItemImage>
            <div>{props.item.name}</div>
            <ItemQuantity>
                <div onClick={()=> props.decreaseItem(props.item)}>❮</div>
                <span>{props.item.quantity}</span>
                <div onClick={()=> props.shopItem(props.item)}>❯</div>
            </ItemQuantity>
            <ItemPrice>${props.item.price}</ItemPrice>
            <ItemRemove onClick={()=>props.removeItem(props.item)}>&#10005;</ItemRemove>
        </CheckoutItemsField>
    )
}
const mapDispatchToProps = dispatch =>({
    removeItem : item => dispatch(removeItem(item)),
    shopItem : item => dispatch(shopItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))

})
export default connect(null, mapDispatchToProps)(CheckoutItems);