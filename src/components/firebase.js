import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDv_LW9K_ebc6MBniU6uUBki89aLnoWxVY",
    authDomain: "react-hooks-blog-aaa03.firebaseapp.com",
    projectId: "react-hooks-blog-aaa03",
    storageBucket: "react-hooks-blog-aaa03.appspot.com",
    messagingSenderId: "644151969805",
    appId: "1:644151969805:web:b5109221d8ccaf60b1ad44"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();