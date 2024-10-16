const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// Middleware for registration validation
const validateRegister = [
  body('nombre').notEmpty().withMessage('Nombre is required.'),
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Validation failed.', errors: errors.array() });
    }
    next();
  },
];

// De manera similar para el login
const validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('password').notEmpty().withMessage('Password cannot be empty.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Validation failed.', errors: errors.array() });
    }
    next();
  },
];

const authMiddleware = (req, res, next) => {

  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No hay token.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.uid;
    next();

  } catch (error) {

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token inválido.' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token ha expirado.' });
    }
    return res.status(400).json({ message: 'Error de autenticación.' });
  }
};

module.exports = {authMiddleware, validateRegister, validateLogin};
