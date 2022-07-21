const mongoose = require("mongoose");
const { database } = require("./../config/environment");

const connect = async () => {
  try {
    const con = await mongoose.connect(database.url);
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(`Error Database : ${error}`);
    process.exit(1);
  }
};

module.exports = connect;
