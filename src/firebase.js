// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCxLYbQsaLQE9uCyUlVULFjy-CFA1TaHqM",
    authDomain: "portfolio2024-43273.firebaseapp.com",
    projectId: "portfolio2024-43273",
    storageBucket: "portfolio2024-43273.firebasestorage.app",
    messagingSenderId: "327663878145",
    appId: "1:327663878145:web:61f7d35517bc385ece0000",
    measurementId: "G-HJ0V1RFTK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
