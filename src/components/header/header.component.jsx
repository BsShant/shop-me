import React from 'react';
import './header.style.scss';
import logo from '../../images/logo.svg';
import ShoppingBag from '../shopping-bag/shopping-bag.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory
}
    from 'react-router-dom';
import { auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector} from 'reselect';
import {loggedUser} from '../../store/selectors/user.selector';
import { toggleCartDropdown} from '../../store/selectors/cart.selector';




const Header = (props) =>{
    

  
        return (

            <div className="header">

                <div className="logo">


                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <div className="nav-bar">


                    <Link to="/shop">shop</Link>
                    {
                        props.loggedUser? 
                        (<p onClick={()=> auth.signOut()}>{props.loggedUser.displayName}</p>)
                        : <Link to="/Login">Login</Link>
                    }
                    <ShoppingBag/>
                    {
                        props.toggleCartDropdown? 
                                <CartDropdown />
                                :
                                null
                    }

                    
        


                </div>


            </div>
        )
    }

    const mapStateToProps = createStructuredSelector({
        loggedUser: loggedUser,
        toggleCartDropdown: toggleCartDropdown
    })
    

export default connect(mapStateToProps, null)(Header);