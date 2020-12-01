import React from 'react';
import {  MenuItemField, BackgroundImage, MenuInfo  } from './menuItem.styles';
import {
    
    useHistory
  } from "react-router-dom";

const MenuItems = ( props ) =>{
    let history = useHistory();
    return (
        <MenuItemField
        onClick= { () =>{
            history.push(`/${props.linkUrl}`)

        }}
        >
            
            <BackgroundImage
            style = {
                {
                    backgroundImage: "url(" + props.imageUrl + ")"
                }
            }/>
            <MenuInfo>
                <h3>{props.title.toUpperCase()}</h3>
                <p>Shop Now</p>
            </MenuInfo>
        </MenuItemField>
        
    )
}

export default MenuItems;