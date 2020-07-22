import React, { Component } from 'react';
import './menuContainer.styles.scss';
import mens from '../../images/mens.jpg';
import womens from '../../images/womens.jpg';
import child from '../../images/child.jpg';
import casual from '../../images/casual.jpg';
import party from '../../images/party.jpg';
import {sections} from './data';

import MenuItem from '../menuItem/menuItem.component';

class MenuContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            category : sections
        }
    }

    render(){
            return(
            <div className="menuContainer">
                {
                    this.state.category.map(cat =>
                        <MenuItem key={cat.key} {...cat}/>
                        )
                }
            </div>
        )
    }
   

}
export default MenuContainer;