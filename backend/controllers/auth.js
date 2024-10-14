require('dotenv').config();
const { firebaseApp } = require('../database/firebaseConnection');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = require('firebase/auth');
const { body, validationResult } = require('express-validator');

const auth = getAuth(firebaseApp);

// Helper function for Firebase error handling
const getFirebaseErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return { message: 'The email address is already registered.', status: 409 };
    case 'auth/invalid-email':
      return { message: 'The email address format is invalid.', status: 400 };
    case 'auth/password-does-not-meet-requirements':
      return { message: 'The password is too weak or does not meet the required criteria. Please use a stronger one.', status: 400 };
    case 'auth/user-not-found':
      return { message: 'No user found with this email.', status: 404 };
    case 'auth/wrong-password':
      return { message: 'Incorrect password. Please try again.', status: 401 };
    case 'auth/invalid-credential':
      return { message: 'Invalid credentials. Please try again.', status: 400 };
    default:
      return { message: 'An unexpected error occurred.', status: 500 };
  }
};

// Middleware for registration validation
const validateRegister = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
];

// Middleware for login validation
const validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('password').notEmpty().withMessage('Password cannot be empty.'),
];

// FIREBASE REGISTER
const registerEmailPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Validation failed.', errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return res.status(201).json({ message: 'User registered successfully.', user: userCredential.user });
  } catch (error) {
    const { message, status } = getFirebaseErrorMessage(error.code);
    return res.status(status).json({ message, errorCode: error.code });
  }
};

// FIREBASE LOGIN
const loginEmailPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Validation failed.', errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return res.status(200).json({ message: 'User logged in successfully.', user: userCredential.user });
  } catch (error) {
    const { message, status } = getFirebaseErrorMessage(error.code);
    return res.status(status).json({ message, errorCode: error.code });
  }
};

module.exports = { registerEmailPassword, loginEmailPassword, validateRegister, validateLogin };
