// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FIREBASE_SDK = JSON.parse(import.meta.env.VITE_FIREBASE_SDK);
//DEBUGGING console.log(FIREBASE_SDK);

const app = initializeApp(FIREBASE_SDK);
export const auth = getAuth(app);

export default app;