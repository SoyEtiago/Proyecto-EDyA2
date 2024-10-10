const express = require("express");
const router = express.Router();

const { registerUser, loginUser, logout } = require("../controllers/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.post(
  "/register/new",
  [
    check("username", "username es obligatorio").not().isEmpty(),
    check("correo", "Formato de correo inválido u obligatorio")
      .not()
      .isEmpty()
      .isEmail(),
    check(
      "password",
      "La contraseña es obligatoria y debe ser mínimo de 6 caractéres"
    ).isLength({ min: 8 }),
    ,
  ],
  registerUser());
