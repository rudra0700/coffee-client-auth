// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIQ2XcvUFhLuIDc3gbjUXyQ1ediE4JFNs",
  authDomain: "coffe-store-32285.firebaseapp.com",
  projectId: "coffe-store-32285",
  storageBucket: "coffe-store-32285.firebasestorage.app",
  messagingSenderId: "902091008977",
  appId: "1:902091008977:web:60572f6f37973c12900ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export default auth

