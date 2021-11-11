//require Router module of express
const Router = require("express");
const { getTasks } = require("../controllers/tasks.controller");

//generate a instance of the Router
const router = Router();

//get all tasks
router.get("/tasks", getTasks);
//add new task
router.post("/tasks");
//update a task
router.put("/tasks");
//delete a task
router.delete("/tasks");
//get one especific task
router.get("/tasks");

module.exports = router;
