const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {
      autoIndex: true,
    });
    console.log("Conectado a Base de Datos");
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar con la BBDD");
  }
};
module.exports = { dbConnection };
