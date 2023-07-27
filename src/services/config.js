import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "proyecto--coderhouse.firebaseapp.com",
    projectId: "proyecto--coderhouse",
    storageBucket: "proyecto--coderhouse.appspot.com",
    messagingSenderId: "306003246248",
    appId: "1:306003246248:web:76ceb71bfaf7edcea1969d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);