require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./db/dbConnection')
const requestLog = require('./middlewares/reqLog')
const { authMiddleware } = require('./middlewares/authMiddleware')
const homeRoute = require('./routes/homeRoute')
const authRoutes = require('./routes/authRoute')
const eventoRoutes = require('./routes/eventoRoute')

const app = express();
const PORT = process.env.PORT;
const VERSION = process.env.VERSION;

dbConnection();

app.use([
  cors({
    origin: ['localhost'], // allowed domains
    methods: ['GET', 'POST'], // allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // allowed headers
  }),
  express.json(),
  express.urlencoded({ extended: true }),
  requestLog,
]);

app.use('/api/home', homeRoute);
app.use('/api/auth', authRoutes);
// Rutas de eventos
app.use('/api/events', authMiddleware, eventoRoutes);

app.listen(PORT, () => {
  console.log(`-----\n meetusBackend v${VERSION}\n Running on port ${PORT} \n -----`);
});
