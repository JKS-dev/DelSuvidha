import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfsTv4yeyjafy-VRkLi0WlsYLttJZrFaU",
  authDomain: "delsuvidha.firebaseapp.com",
  projectId: "delsuvidha",
  storageBucket: "delsuvidha.appspot.com",
  messagingSenderId: "40395971686",
  appId: "1:40395971686:web:890a3fa5140e4e0d1561a7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()