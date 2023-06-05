// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ9DhOhfI7gERUiNDDTPjLUFy6i-xobX8",
  authDomain: "something-new-4cee9.firebaseapp.com",
  projectId: "something-new-4cee9",
  storageBucket: "something-new-4cee9.appspot.com",
  messagingSenderId: "650277676123",
  appId: "1:650277676123:web:69351736edce8aff31cb7e",
  measurementId: "G-GF4FRMJBZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);