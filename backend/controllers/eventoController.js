const { validationResult } = require('express-validator');
const Evento = require('../models/eventoModel');
const Usuario = require('../models/usuarioModel')

const crearEvento = async (req, res) => {
  // Validar los datos del cuerpo de la solicitud
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Errores de validación', errors: errors.array() });
  }

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

  try {
    // Verificar que el organizador existe y obtener el usuario
    const organizador = await Usuario.findById(organizadorId);
    if (!organizador) {
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

    await nuevoEvento.save();


    //TODO: Agregar  EventosCreados: []
    // Actualizar el documento del organizador para agregar el ID del evento a eventosCreados
    await Usuario.findByIdAndUpdate(organizadorId, {
      $push: { eventosCreados: nuevoEvento._id }, // Agregar el ID del nuevo evento
    });

    return res.status(201).json({
      message: 'Evento creado exitosamente',
      event: nuevoEvento,
    });
  } catch (error) {
    // Manejo de errores más detallado
    console.error(error); // Log en servidor
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
