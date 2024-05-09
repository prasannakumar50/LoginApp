// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi0X0OHcG3o9U1W_KU-Wb-f2DqneeWm40",
  authDomain: "login-app-9b1f8.firebaseapp.com",
  projectId: "login-app-9b1f8",
  storageBucket: "login-app-9b1f8.appspot.com",
  messagingSenderId: "1087304109277",
  appId: "1:1087304109277:web:6457f305e343727494df34",
  measurementId: "G-Q1XWYQZHK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 getAnalytics(app);

export const auth = getAuth();