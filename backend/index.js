require("dotenv").config();
const express = require("express");

const app = express();

//CORS middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    ok: true
  });
});

//Server start
app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Bienvenido, versión actual v${process.env.VERSION} \n Servidor corriendo en el puerto: ${process.env.PORT}`
  );
});
