//require the db connection
const { getConnection } = require("../database/connection");

//define the function to get all tasks
const getTasks = async (req, res) => {
  //implement getConnection and excecute the SQL request
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM Task");
  res.json(result.recordset);
};

//export all the functions
module.exports = {
  getTasks,
};
