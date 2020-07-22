import React from 'react';
import './signIn.styles.scss';
import {signInWithGoogle, auth, signOut} from '../../firebase/firebase.utils';
import InputField from '../inputField/inputField.component'; 
import CustomButton from '../customButton/customButton.component'; 

import { prettyDOM } from '@testing-library/react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
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
    
    onFormSubmit = (event) => { 
       
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error =>{
        console.log(error)
        }) 
      
      
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>  
            <InputField handleChange={this.handleChange} label="Email" name="email" type="email"/>
            <InputField handleChange={this.handleChange} label="Password" name="password" type="password"/>
            <CustomButton>sign In</CustomButton>
          
            
            
        </form>
        
        <button type="button" onClick={signInWithGoogle}>SignIn With Google</button>

        
        
         <button type="button" onClick={
            signOut
        }>Sign Out</button>
        
         </div>
        
    )
    }
    

    
}
export default SignIn;