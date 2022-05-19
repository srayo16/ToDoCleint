// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzcmJhEI97UuH9YifS3MFlfibYzIfbdgY",
    authDomain: "to-do-64aca.firebaseapp.com",
    projectId: "to-do-64aca",
    storageBucket: "to-do-64aca.appspot.com",
    messagingSenderId: "1027016112090",
    appId: "1:1027016112090:web:a725c93f60b850cd0a72e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;