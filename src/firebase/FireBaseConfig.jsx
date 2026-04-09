// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlkZe-OI7ozU-h9ggX485DXMVQ5wYxVs4",
//   authDomain: "auth-f77ef.firebaseapp.com",
//   projectId: "auth-f77ef",
//   storageBucket: "auth-f77ef.firebasestorage.app",
//   messagingSenderId: "843368083966",
//   appId: "1:843368083966:web:14868ed623857a8f37d0af"
// };

// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Rk0TcenecQzqGW8_YKEitMw4s_OBhtk",
  authDomain: "smart-marks-909ca.firebaseapp.com",
  projectId: "smart-marks-909ca",
  storageBucket: "smart-marks-909ca.firebasestorage.app",
  messagingSenderId: "779412566513",
  appId: "1:779412566513:web:845c74bc723d3b61061450",
  measurementId: "G-QRRLVWGZMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
