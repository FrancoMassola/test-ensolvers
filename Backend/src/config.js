//require dotenv for environment variable handling
const env = require("dotenv");

env.config();

module.exports = {
  port: process.env.PORT || 5000,
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
};
