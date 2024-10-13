require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { initializeFirebaseConnection } = require("../database/firebaseConnection");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.server = require('http').createServer(this.app);

    this.paths = {
      home: '/api/home',
      auth: '/api/auth',
    };

    // this.dbConnect();
    this.middlewares();
    this.setRoutes();
    this.home();
    // this.invalidPathHandler();
  }

  home() {
    this.app.use('/home', (req, res) => {
      res.status(200).json({
        message: 'Welcome to the home route',
      });
    });
  }
  // This function helps us connect to Firebase
  // async dbConnect() {
  //   initializeFirebaseConnection();
  // }
  // This function adds middlewares to the server
  middlewares() {
    this.app.use(cors({
      origin: ['localhost'], // allowed domains
      methods: ['GET', 'POST'], // allowed methods
      allowedHeaders: ['Content-Type', 'Authorization'] // allowed headers
    }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  // This function sets the routes for the server
  setRoutes() {
    this.app.use(this.paths.home, require('../routes/home'));
    this.app.use(this.paths.auth, require('../routes/auth'));

  }

  // invalidPathHandler() {
  //   // Middleware to handle invalid paths
  //   this.app.use((req, res, next) => {
  //     res.status(404).json({
  //       error: '404 NOT FOUND',
  //       message: 'The requested resource could not be found'
  //     });
  //   });
  // }



  listen() {
    try{
      this.app.listen(this.port || 4000, () => {
        console.log(`Server running on port ${this.port}`);
      });
    }catch (error) {
      console.error(`Error connecting to Firebase: ${error}`);
    }
  }
}

module.exports = Server;
