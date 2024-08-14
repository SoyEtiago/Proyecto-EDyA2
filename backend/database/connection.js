const mongoose = require("mongoose");

const dbConnection = async() => {
  try {
    mongoose.connect(process.env.ATLAS_URI, {
      autoIndex: true,
    });
    console.log("Connected to mongoDB instance");
  } catch (error) {
    console.log(error);
    throw new Error("Error while trying to connect to mongoDB instance");
  }
};
module.exports = { dbConnection };
