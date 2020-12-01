import React from 'react';
import { MenuContainerField   } from './menuContainer.styles';
import { connect } from 'react-redux';
import { menuItems } from '../../store/selectors/menuItems.selector';

import MenuItem from '../menuItem/menuItem.component';

const MenuContainer= (props)  =>{
    
    
            return(
            <MenuContainerField>
                {
                    props.menuItems.map(menuItem =>
                        <MenuItem key={menuItem.id} {...menuItem}/>
                        )
                }
            </MenuContainerField>
        )
    
   

}
const mapStateToProps = state =>({
    menuItems: menuItems(state)
})
export default connect(mapStateToProps)(MenuContainer);