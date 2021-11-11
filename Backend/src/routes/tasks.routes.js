//require Router module of express
const Router = require("express");
const { getTasks, createNewTask, getTasksById, deleteTask, updateOneTask } = require("../controllers/tasks.controller");

//generate a instance of the Router
const router = Router();

//get all tasks
router.get("/tasks", getTasks);
//add new task
router.post("/tasks", createNewTask);
//get one especific task
router.get("/tasks/:id",getTasksById);
//update a task
router.put("/tasks/:id", updateOneTask);
//delete a task
router.delete("/tasks/:id",deleteTask);


module.exports = router;
