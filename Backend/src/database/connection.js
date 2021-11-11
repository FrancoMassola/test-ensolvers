const sql = require("mssql");
const config = require("../config");

//define db connection settings
const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

//connect -> async function
 const getConnection = async () => {
  //db request connection handler
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
};

//export sql to use in controllers
module.exports={
  getConnection,
  sql
}
