// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC6erI31TkvwUH4qm54BV6t2Anu02vO8Pg",
    authDomain: "twilight-10eff.firebaseapp.com",
    databaseURL: "https://twilight-10eff-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "twilight-10eff",
    storageBucket: "twilight-10eff.appspot.com",
    messagingSenderId: "233447691500",
    appId: "1:233447691500:web:8b98efa0fa6d4cb2e681c9",
    measurementId: "G-9NTKMMZZXN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()
export { dataBase };