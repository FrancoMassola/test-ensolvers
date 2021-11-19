const { getConnection } = require("../database/connection");
const Task = require("../database/models/Task");

//define the function to get all tasks
const getTasks = async (req, res) => {
  try {
    //implement getConnection and execute the request
    await getConnection();
    await Task.findAll({}).then((tasks) => {
      res.json(tasks);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//define the function to get all specifics folder tasks
const getFolderTasks = async (req, res) => {
  let { id_folder } = req.params;
  try {
    //implement db connection
    await getConnection();
    //get all tasks related with a specific folder
    await Task.findAll({
      where: { id_task_folder: id_folder },
    }).then((task) => {
      res.json(task);
    });
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
    await getConnection();
    //execute the request
    await Task.create({
      name_task,
      status_task,
      id_task_folder,
    }).then((newTaskAdded) => {
      //send the new task added to the client
      res.json(newTaskAdded);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//get a task by id
const getTasksById = async (req, res) => {
  //get the task id
  const { id } = req.params;
  try {
    //implement db connection
    await getConnection();
    //get a task by id
    await Task.findByPk(id).then((taskFounded) => {
      res.json(taskFounded);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//delete a task by id
const deleteTask = async (req, res) => {
  //get the task id
  const { id } = req.params;
  try {
    //implement db connection
    await getConnection();
    //execute the deletion
    await Task.destroy({
      where: { id_task: id },
    }).then((taskRemoved) => {
      //send a 204 status ok deleted
      res.sendStatus(204);
    });
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
    await getConnection();
    //update a task request
    await Task.update(
      {
        name_task,
        status_task,
      },
      {
        where: {
          id_task: id,
        },
      }
    ).then((taskUpdated) => {
      res.json(taskUpdated);
    });
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
  getFolderTasks,
};
