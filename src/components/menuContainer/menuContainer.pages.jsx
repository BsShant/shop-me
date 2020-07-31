import React from 'react';
import './menuContainer.styles.scss';
import { connect } from 'react-redux';
import { menuItems } from '../../store/selectors/menuItems.selector';

import MenuItem from '../menuItem/menuItem.component';

const MenuContainer= (props)  =>{
    
    
            return(
            <div className="menuContainer">
                {
                    props.menuItems.map(menuItem =>
                        <MenuItem key={menuItem.id} {...menuItem}/>
                        )
                }
            </div>
        )
    
   

}
const mapStateToProps = state =>({
    menuItems: menuItems(state)
})
export default connect(mapStateToProps)(MenuContainer);