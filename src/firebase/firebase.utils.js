import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


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

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const user = firestore.collection("users");
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
                ...additional
            })
            } catch(error){
                console.log(error)
            } 
        }
    
    return usersRef;

}







// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//     }
//   });

export const signOut = () => auth.signOut();
//   firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//   });
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });


  let provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({
//       prompt: 'select_account',
    
//   });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;

//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
