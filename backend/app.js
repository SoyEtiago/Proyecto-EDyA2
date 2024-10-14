require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./db/dbConnection')
const requestLog = require('./middlewares/reqLog')
const homeRoute = require('./routes/homeRoute')
const authRoutes = require('./routes/authRoute')
const eventoRoutes = require('./routes/eventoRoute')

const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();

app.use([
  requestLog,
  cors({
    origin: ['localhost'], // allowed domains
    methods: ['GET', 'POST'], // allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // allowed headers
  }),
  express.json(),
  express.urlencoded({ extended: true })
]);

app.use('/api/home', homeRoute);
app.use('/api/auth', authRoutes);
// Rutas de eventos
app.use('/api/events', eventoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});


