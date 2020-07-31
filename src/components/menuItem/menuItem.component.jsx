import React from 'react';
import './menuItem.styles.scss';
import {
    
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
                <h3>{props.title.toUpperCase()}</h3>
                <p>Shop Now</p>
            </div>
        </div>
        
    )
}

export default MenuItems;