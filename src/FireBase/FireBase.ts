// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBwGgJXl4URpp0aIvA7nNGnslra9PxW7U",
    authDomain: "simplestore-3df57.firebaseapp.com",
    projectId: "simplestore-3df57",
    storageBucket: "simplestore-3df57.appspot.com",
    messagingSenderId: "583188753816",
    appId: "1:583188753816:web:050bb6ab8cfcf803fc4fed",
    measurementId: "G-NFB7NTTHC9"
};

// Initialize Firebase
 export const appFireBase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appFireBase);