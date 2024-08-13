
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAvx4bFbji4idJnHn4oXHsB_vQJbua0VyE",
    authDomain: "chatbot-56d1f.firebaseapp.com",
    projectId: "chatbot-56d1f",
    storageBucket: "chatbot-56d1f.appspot.com",
    messagingSenderId: "396900019831",
    appId: "1:396900019831:web:ab9023a48f50d68a806072",
    measurementId: "G-ZE0YY6541T"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, GoogleAuthProvider, signInWithPopup, signOut, collection, query, orderBy, limit, addDoc, serverTimestamp };
