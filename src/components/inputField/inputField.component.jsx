import React from  'react';
import { InputContainer, Input, Label } from './inputField.styles';


const InputField = ({handleChange, label, ...others}) =>{
    return(
        <InputContainer>
            <Input onChange={handleChange} {...others} />
            {
                label?
                 <Label length = {others.value.length}>{label}</Label>
                 :
                 null
            
            }
            
        </InputContainer>
    )
}
export default InputField;