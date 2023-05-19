import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCVeef7OevhZu_z32DM98eEEMhxKi8pg3k",
    authDomain: "e-library-app-d969d.firebaseapp.com",
    databaseURL: "https://e-library-app-d969d-default-rtdb.firebaseio.com",
    projectId: "e-library-app-d969d",
    storageBucket: "e-library-app-d969d.appspot.com",
    messagingSenderId: "51185094328",
    appId: "1:51185094328:web:a6ef5c765a3d4d03d66e4d",
    measurementId: "G-5YWD652E1D"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
