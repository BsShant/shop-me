import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import casual from '../images/casual.jpg'


var firebaseConfig = {
    apiKey: "AIzaSyCM0Id2_zrZOfsLaSvNpJC1XywSVn89yII",
    authDomain: "shop-me-de9ad.firebaseapp.com",
    databaseURL: "https://shop-me-de9ad.firebaseio.com",
    projectId: "shop-me-de9ad",
    storageBucket: "shop-me-de9ad.appspot.com",
    messagingSenderId: "439678413380",
    appId: "1:439678413380:web:e0772477c521f986ca2a11",
    measurementId: "G-XHSGMH4072"
  };
var app = firebase.initializeApp(firebaseConfig);
//firebase.analytics();
var storage = firebase.storage();
export const storageRef = firebase.storage().ref();
const file = casual
const metadata= {
  contentType: 'image/jpeg'
}



export const auth = firebase.auth();

export const firestore = firebase.firestore();


export const user = firestore.collection("users");
export const createUserProfile = async (authUser, additional) =>{

                const {uid} = authUser;
    const usersRef = user.doc(uid);
    
    
    const snapShot = await usersRef.get()
    
    
        if(!snapShot.exists){
            const {email, displayName} =  authUser;
            const date = new Date();
            try{
              await usersRef.set({
                email,
                displayName,
                date,
                color: '#'+Math.random().toString(16).substr(-6),
                ...additional
            })
            } catch(error){
                console.log(error)
            } 
        }
    
    return usersRef;

}

export const signOut = () => auth.signOut();

  let provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({
//       prompt: 'select_account',
    
//   });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
