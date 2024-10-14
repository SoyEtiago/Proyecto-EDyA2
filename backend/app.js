require('dotenv').config()
const express = require('express')
const cors = require('cors')
const requestLog = require('./middleware/reqLog')
const homeRoute = require('./routes/homeRoute')
const authRoute = require('./routes/authRoute')

const app = express();
const PORT = process.env.PORT || 4000;

app.use([
  requestLog,
  cors({
    origin: ['localhost'], // allowed domains
    methods: ['GET', 'POST'], // allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // allowed headers
  }),
  express.json(),
  express.urlencoded({ extended: true }),
]);

app.use('/api/home', homeRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});


