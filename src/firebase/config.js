import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASaIPRoZNqwLRakYeTAkE3I3q0j_uidxM",
  authDomain: "do-list-49bbd.firebaseapp.com",
  projectId: "do-list-49bbd",
  storageBucket: "do-list-49bbd.appspot.com",
  messagingSenderId: "234079002118",
  appId: "1:234079002118:web:215d1fc3cc530062aa6d87",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
