// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCvCTHSoEopSE9ZPWjrP_f-WTQdCD4di3A",
  authDomain: "todoist-8272a.firebaseapp.com",
  projectId: "todoist-8272a",
  storageBucket: "todoist-8272a.appspot.com",
  messagingSenderId: "377047865725",
  appId: "1:377047865725:web:58d90341b0d6be4fa5d414",
  measurementId: "G-KM8GLLB7N3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

// Export the functions and variables
export {app,auth,firestore,storage,provider,signInWithPopup,signOut};