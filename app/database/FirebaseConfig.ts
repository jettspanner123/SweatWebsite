import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAA-3eEZqvAX5YtdOPCoOtlFDIvXr2TZaM",
    authDomain: "sweatit-db.firebaseapp.com",
    projectId: "sweatit-db",
    storageBucket: "sweatit-db.firebasestorage.app",
    messagingSenderId: "1012186586247",
    appId: "1:1012186586247:web:085aea89bc21f9f2daec22",
    measurementId: "G-VVMK3B7MM3"
};

export const FirebaseApplication = initializeApp(firebaseConfig);
export const FirebaseDatabase = getFirestore(FirebaseApplication);