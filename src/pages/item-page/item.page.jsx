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
    var shopItems= null;
    Object.keys(props.collection).forEach(key =>{
        const list = props.collection[key];

        if(category == list.routeName)
        {
            shopItems= list
        
        }
    })


    
    return(
        <div>
            <h1 style = {
                {
                    textAlign : 'center',
                    fontFamily: `'Lobster', cursive`
                }
            }>{shopItems.title.toUpperCase()}</h1>
            <div className="items-container">
            
            {
              
              
                Object.keys(shopItems).map(key =>{
                    if(key == 'items')
                    {   const list = shopItems[key];
                        return list.map(item=>{
                            return <ShopItem item={item} key={item.id} />
                        })
                       
                    }
                })
            }
        </div>
        </div>
        
        
        
    )
}
const mapStateToProps = state => ({
    collection: shopData(state)
})
export default connect(mapStateToProps)(ItemPage);