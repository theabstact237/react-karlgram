 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from 'firebase/app';
import {getFirestore}from'firebase/firestore';
import {getStorage} from'firebase/storage';

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
   apiKey: "AIzaSyD5NHHdcJZNV0eJOshSgcSUpXwPNa3tWJc",
   authDomain: "karlgram-6ec82.firebaseapp.com",
   databaseURL:"https://karlgram-6ec82-default-rtdb.firebaseio.com",
   projectId: "karlgram-6ec82",
   storageBucket: "karlgram-6ec82.appspot.com",
   messagingSenderId: "812797055726",
   appId: "1:812797055726:web:01a7ff6d4a9bcc6ab8d9ff",
   measurementId: "G-Z7H9KL7KMW"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const projectStorage = getStorage();
 const projectFirestore = getFirestore();
 const timestamp = firebase.firestore.FielValue.serverTimestamp;

export { projectStorage , projectFirestore } ;