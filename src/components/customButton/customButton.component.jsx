import React from  'react';
import './customButton.styles.scss';


const CustomButton = ({children,google, ...others}) =>{
    return(
        
            <button className= {`custom-button ${google? "google-button": ''}`} {...others}>
                {children}
            </button>
            
      
    )
}
export default CustomButton;