const express = require('express')
// const { check } = require('express-validator') NOT BEING USED
const router = express.Router()

const { registerEmailPassword, loginEmailPassword } = require('../controllers/authController');
const {validateRegister, validateLogin} = require('../middlewares/authMiddleware');

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
