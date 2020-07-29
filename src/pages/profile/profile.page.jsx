import React from 'react';
import './profile.styles.scss';
import {connect} from 'react-redux';
import {loggedUser, userDropdown} from '../../store/selectors/user.selector';
import { toggleCartDropdown} from '../../store/selectors/cart.selector';
import { createStructuredSelector} from 'reselect';

const Profile = (props) =>{
    const hi =props.loggedUser?
    console.log("userName",)
    :
    null
    return(
        <div className="profile-page">
            {
                props.loggedUser?
            <div className="user-field">
            <div className="user-image">
                <h1>{props.loggedUser.displayName.charAt(0)}</h1>
            </div>
            <div className="user-details">
            <div className="user-id"><span>Id: {props.loggedUser.id}</span></div>
            <div className="user-name"><span>Name: {props.loggedUser.displayName}</span></div>
            <div className="user-name"><span>Joined Date: {props.loggedUser.date.toDate().toDateString()}</span></div>
            </div>
            </div>
            :
            null
            }
            </div>
        

    )
}

const mapStateToProps = state =>({
        loggedUser: state.user.loggedUser,
        
    })

export default connect(mapStateToProps, null)(Profile);

