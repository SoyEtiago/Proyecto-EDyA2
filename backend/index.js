require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Bienvenido, versión actual v${process.env.VERSION} \n Servidor corriendo en el puerto: ${process.env.PORT}`
  );
});
