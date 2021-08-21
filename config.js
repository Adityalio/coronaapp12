import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAatMtMaZM8Mn4pHVKlub6a96tk9RZ9Yy0",
    authDomain: "myapp1st-8f25a.firebaseapp.com",
    projectId: "myapp1st-8f25a",
    storageBucket: "myapp1st-8f25a.appspot.com",
    messagingSenderId: "582428247152",
    appId: "1:582428247152:web:83d3f1ee8ea4bfdc9c20b5"
  };


if(!firebase.apps.length)
{ 
  firebase.initializeApp(firebaseConfig); 
  }
   export default firebase.firestore()
