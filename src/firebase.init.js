// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD22mSIkYe714x5ISb_aWgoUK7osOu_Kjo",
  authDomain: "genius-car-services-85e22.firebaseapp.com",
  projectId: "genius-car-services-85e22",
  storageBucket: "genius-car-services-85e22.appspot.com",
  messagingSenderId: "335612538536",
  appId: "1:335612538536:web:9bd52dffc81a1aec7c1c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
