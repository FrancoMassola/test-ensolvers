//require the db connection
const { getConnection, sql } = require("../database/connection");

//define the function to get all tasks
const getTasks = async (req, res) => {
  //implement getConnection and excecute the SQL request
  const pool = await getConnection();
  let result = await pool.request().query("SELECT * FROM Task");
  res.json(result.recordset);
};

//function to add a new task into db
const createNewTask = async (req, res) => {
  let { name_task, status_task, id_task_folder } = req.body;
  res.json(name_task);
  //db connection
  const pool = await getConnection();
  //excecute sql request
  await pool
    .request()
    .input("name_task", sql.VarChar, "task_test")
    .input("status_task", sql.Bit, "TRUE")
    .input("id_task_folder", sql.Int, 1)
    .query(
      "INSERT INTO Task (name_task, status_task,id_task_folder) VALUES (@name_task, @status_task, @id_task_folder)"
    );
};

//export all the functions
module.exports = {
  getTasks,
  createNewTask,
};
