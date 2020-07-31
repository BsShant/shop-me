import React from 'react';
import './login.styles.scss';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';
import InputField from '../inputField/inputField.component'; 
import CustomButton from '../customButton/customButton.component'; 


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            touched:''
        }

    }
    handleChange = (event) =>{

        const{name,value} = event.target;
        this.setState({
            [name]: value
        })
    }

    touchField = () =>{
        this.setState({
                touched:'touched'
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
        <div className="login">
            <div className="login-container">
            <h2>I already Have an account</h2>
            <p>Login with your Email and Password</p>
            <form>  
            <InputField handleChange={this.handleChange} label="Email" name="email" type="email" value={this.state.email} />
            <InputField handleChange={this.handleChange} label="Password" name="password" type="password" value={this.state.password}/>
            <div className="button-container">
            <CustomButton type="submit" onClick={this.onFormSubmit} >sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} google>SignIn With Google</CustomButton>
            </div>
            
            
        </form>
        </div>
            
        
        

        
        
         
        
         </div>
        
    )
    }
    

    
}
export default Login;