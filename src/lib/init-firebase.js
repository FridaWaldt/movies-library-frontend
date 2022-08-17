// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnDqBUumeG1zheOXpMpeZg7OHHV367KhA',
  authDomain: 'movies-library-359607.firebaseapp.com',
  projectId: 'movies-library-359607',
  storageBucket: 'movies-library-359607.appspot.com',
  messagingSenderId: '118710878659',
  appId: '1:118710878659:web:caf7cb1c5d2b08a38c7d76',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
