require("dotenv").config();
const { FIREBASE_CONFIG } = process.env;
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const { initializeFirebaseConnection } = require('../database/firebaseConnection');
const { initializeApp: initializeClientApp, getApps: getClientApps } = require('firebase/app');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
initializeFirebaseConnection();

// Initialize Firebase Client SDK only if it's not already initialized
const serviceAccount = JSON.parse(FIREBASE_CONFIG);

if (!getClientApps().length) {
  initializeClientApp(serviceAccount);
  console.log("Firebase Client SDK initialized.");
} else {
  console.log("Firebase Client SDK already initialized.");
}

const auth = getAuth();

// FIREBASE REGISTER
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });
    res.status(201).json({ message: 'User registered successfully', userRecord });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// FIREBASE LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

module.exports = { registerUser, loginUser };
