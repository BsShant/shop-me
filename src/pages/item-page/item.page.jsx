import React from 'react';
import './item.styles.scss';
import {
    
    useParams,
   
  } from "react-router-dom";
  import ShopItem from '../../components/shop-item/shop-item.component';
  import { connect } from 'react-redux';
  import { shopData } from '../../store/selectors/shopData.selector';


const ItemPage = (props) =>{
    const {category} = useParams();
    const shopItems = props.collection.filter(item =>{
        
        return category=== item.routeName 
    })
    // const items = shopItems.map(shopItem =>{
    //     return shopItem.items
    // })
   console.log(shopItems)
    
    return(
        <div>
            <h1 style = {
                {
                    textAlign : 'center',
                    fontFamily: `'Lobster', cursive`
                }
            }>{shopItems[0].title.toUpperCase()}</h1>
            <div className="items-container">
            
            {
                shopItems.map(shopItem =>
                    shopItem.items.map(item =><ShopItem item={item} />
                    )
                )
            }
        </div>
        </div>
        
        
        
    )
}
const mapStateToProps = state => ({
    collection: shopData(state)
})
export default connect(mapStateToProps)(ItemPage);