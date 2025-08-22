import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjEm_gS-YZ6hHK8_FcHEUdFhCz5srvroM",
  authDomain: "portofolio-ef89d.firebaseapp.com",
  projectId: "portofolio-ef89d",
  storageBucket: "portofolio-ef89d.firebasestorage.app",
  messagingSenderId: "416487684502",
  appId: "1:416487684502:web:8fd5c543271f15e052c5b7",
  measurementId: "G-D0NVYV0LRH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, doc, getDoc };
