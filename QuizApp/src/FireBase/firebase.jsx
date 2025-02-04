import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvJfuruwKQ_nLf7zocFed_-g_kiSdJCXg",
  authDomain: "quizapp-8f097.firebaseapp.com",
  projectId: "quizapp-8f097",
  storageBucket: "quizapp-8f097.firebasestorage.app",
  messagingSenderId: "531340846675",
  appId: "1:531340846675:web:a67b0c5e7faa68070ac8a6",
  measurementId: "G-60MZS2ZWFL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider=new GoogleAuthProvider();