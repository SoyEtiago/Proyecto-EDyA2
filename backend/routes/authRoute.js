const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

const { registerEmailPassword, loginEmailPassword, validateRegister, validateLogin } = require('../controllers/authController');

// Route to register a new user
router.post(
  '/register',
  validateRegister,
  registerEmailPassword
);

// Route to login user
router.post(
  '/login',
  validateLogin,
  loginEmailPassword
);

module.exports = router
