//Require OMR Sequelize
const { Sequelize } = require("sequelize");
const config = require("../config");

//declare a sequelize object with db settings
const sequelize = new Sequelize(
  config.dbDatabase,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbServer,
    dialect: "mssql",
    omitNull: true,
  }
);

//connect to the database
const getConnection = async () => {
  try {
    await sequelize.authenticate().then((res) => {
      console.log("Database connection successful");
    });
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

module.exports = {
  sequelize,
  getConnection,
};
