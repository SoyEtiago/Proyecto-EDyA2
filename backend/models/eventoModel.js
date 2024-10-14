const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  organizadorId: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
    required: true,
  },
  tipo: {
    type: String,
    enum: ["Presencial", "Virtual"],
    required: true,
  },
  fechaHoraInicio: {
    type: Date,
    required: true,
  },
  fechaHoraFin: {
    type: Date,
    required: true,
  },
  lugar: {
    direccion: {
      type: String,
    },
    urlMapa: {
      type: String,
    },
  },
  linkOnline: {
    type: String,
  },
  categoria: {
    type: [String],
    required: true,
  },
  capacidadAsistentes: {
    type: Number,
    required: true,
  },
  asistentes: [
    {
      usuario_id: {
        type: String,
        required: true,
        ref: 'usuarios'
      },
      nombre: {
        type: String,
        required: true,
      },
      estaRegistrado: {
        type: Boolean,
        required: true,
      },
      confirmoAsistencia: {
        type: Boolean,
        required: true,
      },
    },
  ],
  precio: {
    type: Number,
    required: true,
  },
  valoraciones: [
    {
      usuarioId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'usuarios'
      },
      calificacion: {
        type: mongoose.Decimal128,
        required: true,
      },
      comentario: {
        type: String,
        required: true,
      },
      fechaHora: {
        type: Date,
        required: true,
        default: Date.now
      },
    },
  ],
  preguntas: [
    {
      usuarioId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'usuarios'
      },
      pregunta: {
        type: String,
        required: true,
      },
      respuestas: [
        {
          organizadorId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'usuarios'
          },
          respuesta: {
            type: String,
            required: true,
          },
          fechaHora: {
            type: Date,
            required: true,
            default: Date.now
          },
        },
      ],
      fechaHora: {
        type: Date,
        required: true,
        default: Date.now
      },
    },
  ],
} , { timestamps: true });

const Evento = mongoose.model("eventos", eventoSchema);

module.exports = Evento;
