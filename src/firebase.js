import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut, } from "firebase/auth";  //import firebase auth lib


const firebaseConfig = {
  apiKey: "AIzaSyAHIHNAtkqtrCalmNGcwJ1K6kIU7cMxiyw",
  authDomain: "crudapp-d3f6e.firebaseapp.com",
  projectId: "crudapp-d3f6e",
  storageBucket: "crudapp-d3f6e.appspot.com",
  messagingSenderId: "162522998505",
  appId: "1:162522998505:web:a14046b8ab3fdc18257278"
};


const app = initializeApp(firebaseConfig); //initialize the connection between firebase and our project

export const db = getFirestore(app); //exporting db 

export const auth = getAuth(app); //exporting auth object after allowing "app" to have authentication

export {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
}