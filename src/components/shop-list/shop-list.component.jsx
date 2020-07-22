import React from 'react';
import './shop-list.styles.scss';
import ShopItem from '../shop-item/shop-item.component';

const ShopList = (props) =>{


        return(
            <div className="shop-list">
                <div className="title">
                    <h1>{props.title.toUpperCase()}</h1>
                </div>
                <div className="list-item">
                {
                    props.item.filter((item, indx) => indx < 4).map(item =>
                        <ShopItem  item={item} />
                    )
                }
                </div>
                
                
            </div>
        )
    
}
export default ShopList;