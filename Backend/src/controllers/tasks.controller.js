//require the db connection
const { getConnection, sql } = require("../database/connection");
const { sqlQuerys } = require("../database/querys");

//define the function to get all tasks
const getTasks = async (req, res) => {
  try {
    //implement getConnection and excecute the SQL request
    const pool = await getConnection();
    let result = await pool.request().query(sqlQuerys.getAllTasks);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//function to add a new task into db
const createNewTask = async (req, res) => {
  let { name_task, status_task, id_task_folder } = req.body;

  //handling the post request error form the server
  if (name_task == null || id_task_folder == null) {
    return res.status(400).json({ msg: "Bad request" });
  }

  //set the default state to the new task added
  if (status_task == false) status_task = 0;

  try {
    //db connection
    const pool = await getConnection();

    //excecute sql request
    await pool
      .request()
      .input("name_task", sql.VarChar, name_task)
      .input("status_task", sql.Bit, status_task)
      .input("id_task_folder", sql.Int, id_task_folder)
      .query(sqlQuerys.addNewTask);
    //send the response to the client with the new task added
    res.json({ name_task, status_task, id_task_folder });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//get a task by id
const getTasksById = async (req, res) => {
  //get the id
  const { id } = req.params;
  //implement db connection
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(sqlQuerys.getTaskById);
  console.log(result);
  //getting the first element of result
  res.send(result.recordset[0]);
};

//export all the functions
module.exports = {
  getTasks,
  createNewTask,
  getTasksById,
};
