const { Schema, model } = require("mongoose");

const usuarioSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    rol: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("usuario", usuarioSchema);
