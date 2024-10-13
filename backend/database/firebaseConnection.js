require("dotenv").config();
const { SERVICE_ACCOUNT } = process.env;
const { initializeApp, cert, getApps } = require('firebase-admin/app');

const serviceAccount = JSON.parse(SERVICE_ACCOUNT);

const initializeFirebaseConnection = () => {
  try {
    if (!getApps().length) {
      initializeApp({
        credential: cert(serviceAccount),
      });
      console.log(`Firebase Admin SDK connection established`);
    } else {
      console.log("Firebase Admin SDK already initialized.");
    }
  } catch (error) {
    console.error(`Error connecting to Firebase Admin SDK: ${error}`);
  }
};

module.exports = { initializeFirebaseConnection };
