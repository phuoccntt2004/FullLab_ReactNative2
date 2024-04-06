// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4f3Df0cxfMl3vmV50oyOJ-rjlqmkCGXk",
  authDomain: "lab7-reactnative2.firebaseapp.com",
  projectId: "lab7-reactnative2",
  storageBucket: "lab7-reactnative2.appspot.com",
  messagingSenderId: "390891852022",
  appId: "1:390891852022:web:f67a20d7deaa88b48c5cd7",
  measurementId: "G-SD7BPBV0RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export {app, analytics, auth, database};