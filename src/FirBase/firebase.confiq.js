// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoEw3jfZy-XIIxg7e4e6CmDAhASOCxehI",
  authDomain: "sweet-home-5b813.firebaseapp.com",
  projectId: "sweet-home-5b813",
  storageBucket: "sweet-home-5b813.appspot.com",
  messagingSenderId: "496620300505",
  appId: "1:496620300505:web:f94b9a88df1c26a42ff6c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;