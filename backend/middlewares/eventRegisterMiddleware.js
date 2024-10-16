const { param } = require('express-validator')

const validateEventRegister = [
  param('eventoId').
  param('participanteId').
  (req, res, next) => {
    param('eventoId').notEmpty().withMessage('eventoId must be required.'),
    param('participanteId').notEmpty().withMessage('Please provide a participant id')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Validation failed.', errors: errors.array() });
    }
    next();
  },
];
