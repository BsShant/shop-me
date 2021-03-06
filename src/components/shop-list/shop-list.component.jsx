import React from 'react';
import './shop-list.styles.scss';
import ShopItem from '../shop-item/shop-item.component';
import {
    useHistory
}
    from 'react-router-dom';

const ShopList = (props) =>{
const history = useHistory()

        return(
            <div className="shop-list">
                <div className="title">
                    <h1 onClick ={() =>history.push(`/shop/${props.title.toLowerCase()}`)}>{props.title.toUpperCase()}</h1>
                </div>
                <div className="list-item">
                {
                    props.item.filter((item, indx) => indx < 4).map(item =>
                        <ShopItem key={item.id} item={item} />
                    )
                }
                </div>
                
                
            </div>
        )
    
}
export default ShopList;