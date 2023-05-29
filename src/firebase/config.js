
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBaa9_zYATOE_3AWGdSdh_7G85IBb4EU34",
    authDomain: "firepics-23670.firebaseapp.com",
    projectId: "firepics-23670",
    storageBucket: "firepics-23670.appspot.com",
    messagingSenderId: "341762037362",
    appId: "1:341762037362:web:c4c56575d85c86595454eb",
    measurementId: "G-7RBFLMDNWH"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    const projectStorage = firebase.storage();
    const projectFirestore = firebase.firestore();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    export { projectStorage, projectFirestore , timestamp};