import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCCKG72tvX0W4BBbZXSzjzTwvkjfTzCAk",
    authDomain: "twitter-clone-acad3.firebaseapp.com",
    projectId: "twitter-clone-acad3",
    storageBucket: "twitter-clone-acad3.appspot.com",
    messagingSenderId: "395558037499",
    appId: "1:395558037499:web:85ac78b6961f5e4605cd5e",
    measurementId: "G-QGWXRE0F21"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;
