// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgm6PYk3HIDIAoDh0VR8oF2OA0tWCf5ss",
  authDomain: "brand-sotre.firebaseapp.com",
  projectId: "brand-sotre",
  storageBucket: "brand-sotre.appspot.com",
  messagingSenderId: "257559311689",
  appId: "1:257559311689:web:93b3b903ec20ddf8e09698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);