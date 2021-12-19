// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7jsuFw7CQN-h3Fte7eatMfk9nR34Jk1Q",
  authDomain: "survey-final.firebaseapp.com",
  projectId: "survey-final",
  storageBucket: "survey-final.appspot.com",
  messagingSenderId: "728884584951",
  appId: "1:728884584951:web:859f4f81a9c689128b0ef2",
  measurementId: "G-G902CML74W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);

export default app;
