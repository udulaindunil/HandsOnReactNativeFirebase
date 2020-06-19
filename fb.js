import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBlw9CUCCWtanFG-VI3dELnONm8niUytDs",
    authDomain: "reactnative-13e22.firebaseapp.com",
    databaseURL: "https://reactnative-13e22.firebaseio.com",
    projectId: "reactnative-13e22",
    storageBucket: "reactnative-13e22.appspot.com",
    messagingSenderId: "431635485676",
    appId: "1:431635485676:web:1477e69e257e36b2a6a6c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase