import React from  'react';
import { RegularButton } from './customButton.styles';


const CustomButton = ({children,...others}) =>{
    return(
        
            <RegularButton {...others}>
                {children}
            </RegularButton>
            
      
    )
}
export default CustomButton;