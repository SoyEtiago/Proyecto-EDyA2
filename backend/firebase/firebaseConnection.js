require('dotenv').config()
const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMENT_ID} = process.env
const { initializeApp } = require('firebase/app')

const firebaseConfig  = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

let app;

try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase SDK connection established');
} catch (error) {
  console.error(`Error connecting to Firebase SDK: ${error.message}`);
}

module.exports = app
