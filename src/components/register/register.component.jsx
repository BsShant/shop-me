import React from 'react';
import './register.styles.scss';
import {signInWithGoogle, auth, signOut, createUserProfile} from '../../firebase/firebase.utils';
import InputField from '../inputField/inputField.component'; 
import CustomButton from '../customButton/customButton.component'; 

import { prettyDOM } from '@testing-library/react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName: '',
            email: '',
            password: ''
        }

    }
    handleChange = (event) =>{

        const{name,value} = event.target;
        this.setState({
            [name]: value
        })
    }
    
    onFormSubmit = async event => { 
        event.preventDefault();
        const {displayName, email, password} = this.state;
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfile(user, {displayName})
            this.setState({
                displayName: '',
            email: '',
            password: ''
            })
        }
        catch(error){ 
        console.log(error)
        }
      
      
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <InputField handleChange={this.handleChange} label="Name" name="displayName" type="text"/>  
            <InputField handleChange={this.handleChange} label="Email" name="email" type="email"/>
            <InputField handleChange={this.handleChange} label="Password" name="password" type="password"/>
            <CustomButton>Register</CustomButton>
          
            
            
        </form>
        
        
         </div>
        
    )
    }
    

    
}
export default Register;