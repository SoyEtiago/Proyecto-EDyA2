require('dotenv').config();
const bcrypt = require('bcrypt');
const { firebaseApp } = require('../db/firebaseConnection');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/usuarioModel'); // Asegúrate de tener el modelo User
const auth = getAuth(firebaseApp);

// Helper to generate JWT
const generateJWT = (uid) => {
  return jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

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
      return { message: '', status: 500 };
  }
};

// FIREBASE REGISTER AND CREATE USER IN MONGODB
const registerEmailPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Validation failed.', errors: errors.array() });
  }

  const { nombre, username, email, password, rol = 'Participante' } = req.body;

  let userCredential;

  try {
    // Registrar el usuario en Firebase
    userCredential = await createUserWithEmailAndPassword(auth, email, password);

  } catch(error){
    const { message, status } = getFirebaseErrorMessage(error.code);
    return res.status(status || 500).json({ message: message || error.message, errorCode: error.code });
  }

  // Hashear la contraseña antes de guardarla en MongoDB
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear un nuevo usuario en MongoDB con el uid de Firebase
  const newUser = new User({
    nombre,
    username,
    email,
    rol,
    hashedPassword,
    firebaseId: userCredential.user.uid,
  });

  try {
    // Crear el usuario en MongoDB con la contraseña hasheada
    await newUser.save();

    // Retornar el usuario registrado
    return res.status(201).json({ message: 'User registered successfully.', user: newUser });

  } catch (error) {
      return res.status(500).json({ message: 'Error registering user.', error: error.message });
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
    // Usar Firebase para autenticar al usuario
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // El uid del usuario autenticado
    const firebaseId = userCredential.user.uid;

    // Opcional: Puedes buscar el usuario en MongoDB para obtener más información
    const user = await User.findOne({ firebaseId });
    if (!user) {
      return res.status(404).json({ message: 'No user found in the database.' });
    }

    // Generar el token JWT
    const token = generateJWT(firebaseId);

    return res.status(200).json({ message: 'User logged in successfully.', token, user });
  } catch (error) {
    const firebaseError = getFirebaseErrorMessage(error.code);
    return res.status(firebaseError.status).json({ message: firebaseError.message });
  }
};


module.exports = { registerEmailPassword, loginEmailPassword };
