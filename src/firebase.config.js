// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAa3K9lyumE_BJDWVwwFYu3zXcn4TKJyk",
  authDomain: "online-job-portal-33370.firebaseapp.com",
  projectId: "online-job-portal-33370",
  storageBucket: "online-job-portal-33370.appspot.com",
  messagingSenderId: "109798520661",
  appId: "1:109798520661:web:7f25378986b49f1d1461dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};