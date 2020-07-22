import React from 'react';
import './login.styles.scss';
import {signInWithGoogle, auth, signOut} from '../../firebase/firebase.utils';
import InputField from '../../components/inputField/inputField.component'; 
import CustomButton from '../../components/customButton/customButton.component'; 

import SignIn from '../../components/signIn/signIn.component';
import Register from '../../components/register/register.component';

import { prettyDOM } from '@testing-library/react';

class Login extends React.Component{
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
        alert("hello")
        // event.preventDefault();
        // auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .catch(error =>{
        // console.log(error)
        // }) 
      
      
    }

    render(){
        return(
        <div className="signin-page">
            <SignIn />
            <Register />
         </div>
        
    )
    }
    

    
}
export default Login;