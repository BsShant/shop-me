import React from 'react';
import './signIn.styles.scss'; 

import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';

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
            <Login />
            <Register />
         </div>
        
    )
    }
    

    
}
export default SignIn;