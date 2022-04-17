// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCfLZtK2opR9aOafCJFsnbsaERA4e2BZs",
  authDomain: "basic-photography.firebaseapp.com",
  projectId: "basic-photography",
  storageBucket: "basic-photography.appspot.com",
  messagingSenderId: "565617972077",
  appId: "1:565617972077:web:93d02b1c4c5d51759b4064",
  measurementId: "G-GP79MQNFN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;