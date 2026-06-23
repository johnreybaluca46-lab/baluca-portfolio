// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHWaB7FAECt5B0ujJYWOmPhO9vG3EUDEg",
    authDomain: "myportfolio-37ca7.firebaseapp.com",
    projectId: "myportfolio-37ca7",
    storageBucket: "myportfolio-37ca7.firebasestorage.app",
    messagingSenderId: "1057148815297",
    appId: "1:1057148815297:web:7c38faeff5fc9424415140",
    measurementId: "G-GBQTSY2DKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);