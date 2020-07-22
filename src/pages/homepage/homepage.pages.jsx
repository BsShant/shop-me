import React from 'react';
import './homepage.styles.scss';

import MenuContainer from '../../components/menuContainer/menuContainer.pages';


const Homepage = (props) =>{
 
    return(
        <div className="homepage">
            <MenuContainer />
        </div>
    )
}
export default Homepage;