import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
  Redirect
} from "react-router-dom";
// import {
//   TransitionGroup,
//   CSSTransition
// } from "react-transition-group";


import Homepage from './pages/homepage/homepage.pages';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';
import SignIn from './pages/signIn/signIn.page';
import { auth, createUserProfile } from './firebase/firebase.utils';
import {setLoggedUser} from './store/action/index.action';
import Checkout from './pages/checkout/checkout.page';
import Profile from './pages/profile/profile.page';

import {connect} from 'react-redux';

class App extends Component {
  
componentDidMount(){
    auth.onAuthStateChanged( async authUser => {
    
        if(authUser){
            const userRef = await createUserProfile(authUser)

        userRef.onSnapshot(snap =>{
            
            this.props.setLoggedUser({
              id: snap.id,
              ...snap.data()
            })
    })
  }
         else {
          this.props.setLoggedUser(authUser)
        }
      });
}

  render(){return (
    <div className="App">
      
      <Router>

      <Header/>
        <Switch>
        
          <Route path='/shop' children={<Shop />} />
          <Route path='/signIn' render={()=> this.props.loggedUser? <Redirect to="/"/>: <SignIn />} />
          
            <Route exact path='/' children={<Homepage />} />
            <Route exact path='/checkout' children={<Checkout />} />
            <Route exact path ='/profile' render={()=> this.props.loggedUser? <Profile /> :<Redirect to="/signIn"/>}/>
               
            

        </Switch>
      </Router>
     
    </div>
  );
}
}
const mapConnectToProps = state =>({
  loggedUser: state.user.loggedUser
})
const mapDispatchToProps = dispatch =>({
  setLoggedUser : user => dispatch(setLoggedUser(user))
})

export default connect(mapConnectToProps,mapDispatchToProps)(App);
