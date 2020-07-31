import React, {useRef} from 'react';
import './user-dropdown.styles.scss';
import {toggleUserDropdown} from '../../store/action/user.action';
import {
    
    useHistory
}
    from 'react-router-dom';
import { auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const UserDropdown = (props) =>{
    const handleDropdown = (event) =>{
        if(dropdown.current && !dropdown.current.contains(event.target)){
            props.dispatch(toggleUserDropdown());
        }
    }
    React.useEffect( () =>{
        window.addEventListener('mousedown', handleDropdown)

        return () => window.removeEventListener('mousedown', handleDropdown)
    },[])


const dropdown = useRef(null)
const history = useHistory()
    return(
        
            <div className="user-dropdown" ref={dropdown}>
                                    <p className="user-dropdown-items" onClick= {()=> {
                                        history.push('./profile')
                                        props.dispatch(toggleUserDropdown())}}>Profile</p>
                                    <p className="user-dropdown-items"onClick={() => {auth.signOut()
                                     props.dispatch(toggleUserDropdown())}}>Logout</p>

                                </div>
    )
}

export default connect()(UserDropdown);