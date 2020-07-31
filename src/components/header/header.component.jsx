import React from 'react';
import './header.style.scss';
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




const Header = (props) =>{

        return (

            <div className="header">

                <div className="logo">


                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <div className="nav-bar">
                    

                    <Link to="/shop" className="nav-item">shop</Link>
                    {
                        props.loggedUser? 
                        (<div className="nav-item user-item">
                            <div onClick={props.toggleUserDropdown}   className="display-user" style={
                                {
                                    backgroundColor : `${props.loggedUser.color}`
                                }
                            }>
                                
                                {
                                   props.loggedUser.profileImage?
                                   <img src={props.loggedUser.profileImage} alt="profile" style={
                                       {
                                           width: "100%",
                                           borderRadius: '50%',
                                           height: '100%'
                                       }
                                   } />
                                   :
                                props.loggedUser.displayName.charAt(0)
                                }
                            </div>
                            {
                                props.toggleUser?
                                <UserDropdown />
                                :
                                null
                            }
                            </div>)
                        : <Link to="/signIn" className="nav-item">signIn</Link>
                    }
                    <div className="nav-item shop-bag">
                        <ShoppingBag/>
                        {
                        props.toggleCartDropdown? 
                                <CartDropdown />
                                :
                                null
                        }

                        </div>

                    
                    
        


                </div>


            </div>
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