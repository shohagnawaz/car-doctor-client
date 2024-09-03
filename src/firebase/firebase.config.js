// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.local.VITE_apiKey,
  // authDomain:import.meta.env.local.ITE_authDomain,
  // projectId:import.meta.env.local.VITE_projectId,
  // storageBucket:import.meta.env.local.VITE_storageBucket,
  // messagingSenderId:import.meta.env.local.VITE_messagingSenderId,
  // appId:import.meta.env.local.VITE_appId

  apiKey: "AIzaSyCqCAnLMO6BkikXvrlxKG49LON5tnQY9dM",
  authDomain: "cars-doctor-975f0.firebaseapp.com",
  projectId: "cars-doctor-975f0",
  storageBucket: "cars-doctor-975f0.appspot.com",
  messagingSenderId: "397321629873",
  appId: "1:397321629873:web:0e781b8e114fbca60e3290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;