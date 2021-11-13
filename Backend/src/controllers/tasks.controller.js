//require the db connection
const { getConnection, sql } = require("../database/connection");
const { sqlQueries } = require("../database/queries");

//define the function to get all tasks
const getTasks = async (req, res) => {
  try {
    //implement getConnection and excecute the SQL request
    const pool = await getConnection();
    let result = await pool.request().query(sqlQueries.getAllTasks);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//define the function to get all especifics folder tasks
const getFolderTasks = async (req, res) => {
  let { id_folder } = req.params
  try {
    //implement getConnection and excecute the SQL request
    const pool = await getConnection();
    let result = await pool.request()
    .input("id_folder", sql.Int, id_folder)
    .query(sqlQueries.getFolderTasks);
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
  if (name_task == null) {
    return res
      .status(400)
      .json({ msg: "Bad request, all the fields are required" });
  }

  //set the default state "False" to the new task added
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
      .query(sqlQueries.addNewTask);
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
  try {
    //implement db connection
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(sqlQueries.getTaskById);
    //send the first element of result
    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//delete a task by id
const deleteTask = async (req, res) => {
  //get the id
  const { id } = req.params;
  try {
    //implement db connection
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(sqlQueries.deleteTask);
    //send a 204 status ok deleted
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//implement the controller to update a task
const updateOneTask = async (req, res) => {
  let { name_task, status_task } = req.body;
  const { id } = req.params;
  //handling the put request error form the server
  if (name_task == null) {
    return res
      .status(400)
      .json({ msg: "Bad request, all the fields are required" });
  }
  try {
    //implement db connection
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name_task", sql.VarChar, name_task)
      .input("status_task", sql.Bit, status_task)
      .input("id", sql.Int, id)
      .query(sqlQueries.updateTaskById);

    res.json({ name_task, status_task });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//export all the functions
module.exports = {
  getTasks,
  createNewTask,
  getTasksById,
  deleteTask,
  updateOneTask,
  getFolderTasks
};
