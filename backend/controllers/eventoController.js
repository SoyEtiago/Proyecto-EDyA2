const mongoose = require('mongoose')
const { validationResult } = require('express-validator');
const Evento = require('../models/eventoModel');
const Usuario = require('../models/usuarioModel')

const crearEvento = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Errores de validación', errors: errors.array() });
  }

  const session = await mongoose.startSession(); // Iniciar la sesión para la transacción
  session.startTransaction(); // Iniciar la transacción

  try {
    const {
      nombre,
      descripcion,
      organizadorId,
      tipo,
      fechaHoraInicio,
      fechaHoraFin,
      lugar,
      linkOnline,
      categoria,
      capacidadAsistentes,
      precio,
    } = req.body;

    // Verificar que el organizador existe y obtener el usuario
    const organizador = await Usuario.findById(organizadorId).session(session);
    if (!organizador) {
      await session.abortTransaction(); // Revertir la transacción
      session.endSession();
      return res.status(404).json({ message: 'Organizador no encontrado' });
    }

    const nuevoEvento = new Evento({
      nombre,
      descripcion,
      organizadorId,
      tipo,
      fechaHoraInicio,
      fechaHoraFin,
      lugar,
      linkOnline,
      categoria,
      capacidadAsistentes,
      precio,
    });

    // Guardar el evento en la base de datos dentro de la transacción
    await nuevoEvento.save({ session });

    // Actualizar el organizador para agregar el ID del evento creado
    await Usuario.findByIdAndUpdate(organizadorId, {
      $push: { eventosCreados: nuevoEvento._id }
    }, { session });

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      message: 'Evento creado exitosamente',
      event: nuevoEvento,
    });
  } catch (error) {
    // En caso de error, se revierte la transacción
    await session.abortTransaction();
    session.endSession();

    return res.status(500).json({
      message: 'Error interno del servidor al crear el evento',
      error: error.message,
    });
  }
};


const obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.find().populate('organizadorId', 'nombre');
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los eventos', error });
  }
};

const obtenerEventoPorId = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id).populate('organizadorId', 'nombre');
    if (!evento) {
      return res.status(404).json({ message: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el evento', error });
  }
};

// const actualizarEvento = async (req, res) => {
//   try {
//     const eventoActualizado = await Evento.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     if (!eventoActualizado) {
//       return res.status(404).json({ message: 'Evento no encontrado' });
//     }
//     res.json(eventoActualizado);
//   } catch (error) {
//     res.status(500).json({ message: 'Error al actualizar el evento', error });
//   }
// };

// const eliminarEvento = async (req, res) => {
//   try {
//     const eventoEliminado = await Evento.findByIdAndDelete(req.params.id);
//     if (!eventoEliminado) {
//       return res.status(404).json({ message: 'Evento no encontrado' });
//     }
//     res.json({ message: 'Evento eliminado correctamente' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error al eliminar el evento', error });
//   }
// };

module.exports = {
  crearEvento,
  obtenerEventos,
  obtenerEventoPorId,
  // actualizarEvento,
  // eliminarEvento,
};
