require("dotenv").config(); //dotenv for using environment variables

//vars definition
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/connection");
const { initializeFirebaseConnection } = require("../database/firebaseConnection");

const app = express();

//middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//dbConnection func call
//dbConnection();

// Firebase Connection fun call
initializeFirebaseConnection();

/*
defined paths
paths = {
     home: "/home",
     login: "/login",
    };
*/

app.get("/", (req, res) => {
  res.status(200).json({
    text: "Bienvenido a la API de meetUs",
  });
});

//Server start
app.listen(process.env.PORT || 4000, () => {
  console.log(
    `v${process.env.VER} instance running @ port ${process.env.PORT}`
  );
});
