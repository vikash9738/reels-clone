// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqZAESogpgUYG4L3dKqo9W2R3imG8IPYE",
    authDomain: "vk-98-d82a8.firebaseapp.com",
    projectId: "vk-98-d82a8",
    storageBucket: "vk-98-d82a8.appspot.com",
    messagingSenderId: "367904656003",
    appId: "1:367904656003:web:3476abd1ece715ffe269b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
 const firestore=firebase.firestore();
 export const database={
    users: firestore.collection('users') ,
    posts: firestore.collection('posts'),
    comments: firestore.collection('comments'),
    getTimeStamp: firebase.firestore.FieldValue.serverTimestamp
 }
 export  const storage=firebase.storage();