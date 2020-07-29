import React from 'react';
import './shop-item.styles.scss';
import {connect} from 'react-redux';
import {shopItem} from '../../store/action/index.action';

const ShopItem = ({item, shopItem}) =>{
   
    return(
        <div className="shop-item">
            <div className="item-image"
            >
               <div className="item-box"
               style={
                {
                     backgroundImage: `url(${item.imageUrl})`
                 }
             }></div>
                <div className="add-to-cart" onClick={() =>shopItem(item)}>Add To Cart</div>
            </div>
            
            <div className="item-info">
                 <div className="item-name">{item.name}</div>
                 <div className="item-price">${item.price}</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    shopItem: item => dispatch(shopItem(item))
})
export default connect(null , mapDispatchToProps)(ShopItem);