import React from 'react';
import './shop.style.scss';
import shopData from './shop-data';
import ShopList from '../../components/shop-list/shop-list.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   useRouteMatch,
    Redirect
  } from "react-router-dom";
  import ItemPage from '../item-page/item.page';



const Shop = (props) =>{
    const {path} = useRouteMatch();


        
        return(
            <div className="shop">
                
                <Switch>
                    <Route exact path={`${path}`} >
                    {
                
                         shopData.map(list =>
                            <ShopList key={list.id} title={list.title} route={list.routeName} item={list.items}/>

                             )
                        }
                        
                    </Route>
                    <Route path={`${path}/:category`}>
                    <ItemPage collection={shopData}/>
                    </Route>

                </Switch>
                
            </div>
        )
    
}
export default Shop;