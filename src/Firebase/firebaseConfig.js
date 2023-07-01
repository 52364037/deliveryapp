// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKnMmHlwWoPLC6R5jZ7oVbw4qAaxhLYbw",
  authDomain: "deliveryapp-360bd.firebaseapp.com",
  projectId: "deliveryapp-360bd",
  storageBucket: "deliveryapp-360bd.appspot.com",
  messagingSenderId: "75868460218",
  appId: "1:75868460218:web:b0d4e147208479184b1e83",
  measurementId: "G-YB3QQSTECJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);