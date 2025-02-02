import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsiUC7HFqzflRfkqEOLO28zAwPN0aKBRM",
  authDomain: "projectlearn-3871e.firebaseapp.com",
  projectId: "projectlearn-3871e",
  storageBucket: "projectlearn-3871e.firebasestorage.app",
  messagingSenderId: "591701273428",
  appId: "1:591701273428:web:a7cbfeebdc91ad283bf6c1",
  measurementId: "G-47C5D8WZ5S"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider();