const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { registerUser, loginUser } = require("../controllers/auth");

// Route to register a new user
router.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("correo", "Invalid or missing email format")
      .isEmail()
      .not()
      .isEmpty(),
    check("password", "Password must be at least 8 characters long")
      .isLength({ min: 8 }),
  ],
  registerUser
);

// Route to login user
router.post("/login", loginUser);

// router.post("/logout", logout);

module.exports = router;
