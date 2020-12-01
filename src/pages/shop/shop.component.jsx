import React from 'react';
import './shop.style.scss';
import ShopList from '../../components/shop-list/shop-list.component';
import {
    Switch,
    Route,
   useRouteMatch,
  } from "react-router-dom";
  import ItemPage from '../item-page/item.page';
  import { connect } from 'react-redux';
  import { firestore, collectionSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { render } from '@testing-library/react';
import shopData from './shop-data';
import { fetchCollectionsStartAsync } from '../../store/action/shop.action';

const ItemPageWithSpinner = WithSpinner(ItemPage);
const ShopListWithSpinner = WithSpinner(ShopList);

class Shop extends React.Component{

   
    componentDidMount(){
       this.props.fetchCollectionsStartAsync();
    }

    render(){
       
        return(
            <div className="shop">
                
                <Switch>
                    <Route exact path={`/shop`} >
                    {
                        Object.keys(this.props.shopData).map(key =>{
                            const list = this.props.shopData[key];
                            return <ShopListWithSpinner isLoading={this.props.isFetching} key={list.id} title={list.title} route={list.routeName} item={list.items}/>

                        })
                       
                     }
                        
                    </Route>
                    <Route path={`/shop/:category`}>
                    <ItemPageWithSpinner isLoading={this.props.isFetching} />
                    </Route>

                </Switch>
                
            </div>
        )
    }
        
    
}

const mapStateToProps = state => ({
    shopData: state.shopData.shopData,
    isFetching: state.shopData.isFetching
})
const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(Shop);