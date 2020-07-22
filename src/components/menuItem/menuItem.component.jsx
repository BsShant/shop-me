import React from 'react';
import './menuItem.styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory
  } from "react-router-dom";

const MenuItems = ( props ) =>{
    let history = useHistory();
    return (
        <div className="menuItem"
        onClick= { () =>{
            history.push(`/${props.linkUrl}`)

        }}
        >
            
            <div className="backgroundImage"
            style = {
                {
                    backgroundImage: "url(" + props.imageUrl + ")"
                }
            }/>
            <div className="menuInfo">
                <h1>{props.title.toUpperCase()}</h1>
                <h3>Shop Now</h3>
            </div>
        </div>
        
    )
}

export default MenuItems;