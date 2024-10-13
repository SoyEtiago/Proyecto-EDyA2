require("dotenv").config();
const { SERVICE_ACCOUNT } = process.env;
const { initializeFirebaseConnection } = require('../database/firebaseConnection');
const { initializeApp: initializeClientApp, getApps: getClientApps } = require('firebase/app');
const { check, validationResult } = require('express-validator');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
initializeFirebaseConnection();

// Initialize Firebase Client SDK only if it's not already initialized
const serviceAccount = JSON.parse(SERVICE_ACCOUNT);

if (!getClientApps().length) {
  initializeClientApp(serviceAccount);
  console.log("Firebase Client SDK initialized.");
} else {
  console.log("Firebase Client SDK already initialized.");
}

const auth = admin.auth();

// FIREBASE REGISTER
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use Admin SDK to create a new user
    const userRecord = await auth.createUser({
      email: email,
      password: password,
    });
    res.status(201).json({ message: 'User registered successfully', userRecord });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

const validateLoginInput = [
  check('email').isEmail().withMessage('Please provide a valid email address'),
  check('password').not().isEmpty().withMessage('Password cannot be empty'),
];

// Firebase login function
const loginUser = async (req, res) => {
  // Validate the input first
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  console.log(email);

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (userRecord) {
      // Generate a custom token for the user to use on the client-side
      const customToken = await auth.createCustomToken(userRecord.uid);
      res.status(200).json({ message: 'Login successful', customToken });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

module.exports = { registerUser, loginUser };
