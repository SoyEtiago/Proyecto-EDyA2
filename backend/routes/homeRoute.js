const express = require('express')
const router = express.Router()

// Home route
router.get('/', (req, res) => {
  res.send('Bienvenido a la API de MeetUs');
});

module.exports = router
