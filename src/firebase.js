// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "simpletweet-423917.firebaseapp.com",
  projectId: "simpletweet-423917",
  storageBucket: "simpletweet-423917.appspot.com",
  messagingSenderId: "418493800542",
  appId: "1:418493800542:web:8bb666ceffb162cbbd94cf",
  measurementId: "G-KCZEK9QVVS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);