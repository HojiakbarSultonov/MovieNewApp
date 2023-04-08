import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkHnO4Z5Em2KrALPCUKvBB2SSJHcgvfLs",
  authDomain: "movie-app-hoji.firebaseapp.com",
  projectId: "movie-app-hoji",
  storageBucket: "movie-app-hoji.appspot.com",
  messagingSenderId: "791448164189",
  appId: "1:791448164189:web:03337a614a7b39c4f0fab4",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export {db, auth}
