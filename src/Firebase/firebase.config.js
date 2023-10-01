// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBE1eQec9iM2MlVZTEP-Dt2Wm1DUG7lRo",
  authDomain: "user-email-password-auth-2251b.firebaseapp.com",
  projectId: "user-email-password-auth-2251b",
  storageBucket: "user-email-password-auth-2251b.appspot.com",
  messagingSenderId: "439762860917",
  appId: "1:439762860917:web:73102f65ad5e5cd304713c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;
//export default app;
