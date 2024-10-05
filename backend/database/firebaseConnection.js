require("dotenv").config();
const { FIREBASE_CONFIG } = process.env;

// SDK de Firebase Admin Auth
const { initializeApp, applicationDefault, cert, SDK_VERSION} = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

const serviceAccount = JSON.parse(FIREBASE_CONFIG);

const initializeFirebaseConnection = () => {
  initializeApp({
    credential: cert(serviceAccount)
  })

  const db = getFirestore();
  console.log(`Connected @ Firebase SDK v.${SDK_VERSION}`);
}

module.exports = { initializeFirebaseConnection };


