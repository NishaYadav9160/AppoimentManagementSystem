import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDbFlD5WVOReUNnbqGvLBjFYTyrCgY4LC4",
    authDomain: "fir-crude-3b1dc.firebaseapp.com",
    databaseURL: "https://fir-crude-3b1dc-default-rtdb.firebaseio.com",
    projectId: "fir-crude-3b1dc",
    storageBucket: "fir-crude-3b1dc.appspot.com",
    messagingSenderId: "54587833963",
    appId: "1:54587833963:web:4373adaca9d8deaee5bb2e",
    measurementId: "G-JGJV2YTQHC"
  };

   await firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase