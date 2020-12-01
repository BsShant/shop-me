import React from 'react';
import logo from '../../images/logo.svg';
import ShoppingBag from '../shopping-bag/shopping-bag.component';
import {
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector} from 'reselect';
import {loggedUser, userDropdown} from '../../store/selectors/user.selector';
import { toggleCartDropdown} from '../../store/selectors/cart.selector';
import { toggleUserDropdown} from '../../store/action/user.action';
import { cartDropdown } from '../../store/action/cart.action';
import UserDropdown from '../userDropdown/user-dropdown.component';

import { HeaderTop, NavBar, NavLink, UserItem, ShopBag, DisplayUser, Logo } from './header.styles';




const Header = (props) =>{

        return (

            <HeaderTop>
                <Logo>
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </Logo>
                <NavBar>
                    <NavLink to="/shop">shop</NavLink>
                        {
                            props.loggedUser? 
                            (<UserItem>
                                <DisplayUser onClick={props.toggleUserDropdown}
                                backgroundColor = {props.loggedUser.color}  
                                > 
                                    {
                                        props.loggedUser.photoURL?
                                            <img src={props.loggedUser.photoURL} alt="profile" style={
                                                {
                                                    width: "100%",
                                                    borderRadius: '50%',
                                                    height: '100%'
                                                }
                                            } />
                                            :
                                            props.loggedUser.displayName.charAt(0)
                                    }
                                </DisplayUser>
                                    {
                                        props.toggleUser?
                                        <UserDropdown />
                                        :
                                        null
                                    }
                                </UserItem>)
                            : <NavLink to="/signIn">signIn</NavLink>
                        }
                        <ShopBag>
                            <ShoppingBag/>
                            {
                                props.toggleCartDropdown? 
                                        <CartDropdown />
                                        :
                                        null
                            }
                        </ShopBag>
                </NavBar>
            </HeaderTop>
        )
    }

    const mapStateToProps = createStructuredSelector({
        loggedUser: loggedUser,
        toggleCartDropdown: toggleCartDropdown,
        toggleUser: userDropdown
    })
    const mapDispatchToProps = dispatch =>({
        toggleUserDropdown : ( )=> dispatch(toggleUserDropdown()),
        cartDropdown: () => dispatch(cartDropdown())
    })

export default connect(mapStateToProps, mapDispatchToProps)(Header);