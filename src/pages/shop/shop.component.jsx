import React from 'react';
import './shop.style.scss';
import ShopList from '../../components/shop-list/shop-list.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   useRouteMatch,
    Redirect
  } from "react-router-dom";
  import ItemPage from '../item-page/item.page';
  import { connect } from 'react-redux';
  import { shopData } from '../../store/selectors/shopData.selector';

const Shop = (props) =>{
    const {path} = useRouteMatch();
        return(
            <div className="shop">
                
                <Switch>
                    <Route exact path={`${path}`} >
                    {
                
                         props.shopData.map(list =>
                            <ShopList key={list.id} title={list.title} route={list.routeName} item={list.items}/>

                             )
                        }
                        
                    </Route>
                    <Route path={`${path}/:category`}>
                    <ItemPage />
                    </Route>

                </Switch>
                
            </div>
        )
    
}

const mapStateToProps = state => ({
    shopData: shopData(state)
})
export default connect(mapStateToProps)(Shop);