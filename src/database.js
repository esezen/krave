// src/firebase.js
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBzHAdqAbX9zgJGf3ndpSqQIKnCQQfvxqc",
  authDomain: "krave-82b51.firebaseapp.com",
  databaseURL: "https://krave-82b51.firebaseio.com",
  projectId: "krave-82b51",
  storageBucket: "krave-82b51.appspot.com",
  messagingSenderId: "339558582689"
};
firebase.initializeApp(config);
export default firebase;
