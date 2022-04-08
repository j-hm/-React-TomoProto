import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1NlG0KHV8AMnxs2D1wHOG3U_NjXF4HC0",
  authDomain: "fortomo-7d311.firebaseapp.com",
  projectId: "fortomo-7d311",
  storageBucket: "fortomo-7d311.appspot.com",
  messagingSenderId: "352706070959",
  appId: "1:352706070959:web:7f1fae901fe2085bb0075a",
  measurementId: "G-M5BRQLN566",
};

export default firebase.initializeApp(firebaseConfig);

export const db = getFirestore();
