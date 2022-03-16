import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs1_ak9I4nuwfbDUWX67UU2JShyZQq5XA",
  authDomain: "timetrackingapp-e1e0f.firebaseapp.com",
  projectId: "timetrackingapp-e1e0f",
  storageBucket: "timetrackingapp-e1e0f.appspot.com",
  messagingSenderId: "824518666761",
  appId: "1:824518666761:web:022b7899c6a9082de266d8",
  measurementId: "G-51RE4Y68JP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
