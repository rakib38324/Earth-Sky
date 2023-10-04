// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDjgaVHkaO9UhmnszJnIDm9MftJDkm-gJo",
  authDomain: "earth-sky-bridge.firebaseapp.com",
  projectId: "earth-sky-bridge",
  storageBucket: "earth-sky-bridge.appspot.com",
  messagingSenderId: "1094763022436",
  appId: "1:1094763022436:web:e9e6182e40db8ff17f7771"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;