// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
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
  hashedPassword: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ['Organizador', 'Participante'],
    default: 'Participante',
  },
  eventosRegistrados: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'eventos',
  }],
  eventosCreados: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'eventos',
  }],
  imagenPerfil: {
    type: String,
  },
  firebaseId: {
    type: String,
    unique: true
  }
}, { timestamps: true });

const Usuario = mongoose.model('usuarios', userSchema);

module.exports = Usuario;

