const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('Bienvnido a la API de meetUs');
});

module.exports = router;
