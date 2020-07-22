import React from  'react';
import './customButton.styles.scss';


const CustomButton = ({children, ...others}) =>{
    return(
        
            <button className="custom-button" {...others}>
                {children}
            </button>
            
      
    )
}
export default CustomButton;