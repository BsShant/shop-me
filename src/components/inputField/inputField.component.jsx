import React from  'react';
import './inputField.styles.scss';


const InputField = ({handleChange, label, ...others}) =>{
    return(
        <div className="input-field">
            <input className="input" onChange={handleChange} {...others} />
            {
                label?
                 <label className={`${others.value.length? 'shrink' : ''} label`}>{label}</label>
                 :
                 null
            
            }
            
        </div>
    )
}
export default InputField;