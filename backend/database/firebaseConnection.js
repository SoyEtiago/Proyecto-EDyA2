require("dotenv").config();
const { FIREBASE_CONFIG } = process.env;

// SDK de Firebase Admin Auth
const { initializeApp, cert} = require('firebase-admin/app');

const serviceAccount = JSON.parse(FIREBASE_CONFIG);

const initializeFirebaseConnection = () => {
  try {
    initializeApp({
      credential: cert(serviceAccount)
    });
    console.log(`Firebase connection established`);
  }
  catch (error) {
    console.error(`Error connecting to Firebase: ${error}`);
  }
}

module.exports = { initializeFirebaseConnection };
