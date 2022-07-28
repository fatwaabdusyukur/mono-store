require("dotenv").config();

module.exports = {
  apk: {
    name: "Monostore",
    port: process.env.PORT || 5000,
  },
  database: {
    url: "mongodb://localhost:27017/db_monostore",
  },
  jsonWebToken: {
    key: process.env.JWT_SECRET,
    lifeTime: "3d",
  },
};
