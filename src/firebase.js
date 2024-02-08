// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6erI31TkvwUH4qm54BV6t2Anu02vO8Pg",
    authDomain: "twilight-10eff.firebaseapp.com",
    projectId: "twilight-10eff",
    storageBucket: "twilight-10eff.appspot.com",
    messagingSenderId: "233447691500",
    appId: "1:233447691500:web:8b98efa0fa6d4cb2e681c9",
    measurementId: "G-9NTKMMZZXN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()