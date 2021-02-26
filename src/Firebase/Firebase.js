import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYosFjSmUIY2aZvm2oDn-uOeCCzhB8YfM",
    authDomain: "project-app-1637c.firebaseapp.com",
    projectId: "project-app-1637c",
    storageBucket: "project-app-1637c.appspot.com",
    messagingSenderId: "1099033997119",
    appId: "1:1099033997119:web:512a3e9b9fcd67312fad8a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
