const sql = require("mssql");

//define db connection settings
const dbSettings = {
  user: "ensolvers",
  password: "ensolvers123",
  server: "localhost",
  database: "testchallenge",
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
