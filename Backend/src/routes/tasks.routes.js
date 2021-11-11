//require Router module of express
const Router = require("express");
const { getTasks } = require("../controllers/tasks.controller");

//generate a instance of the Router
const router = Router();

//get all tasks
router.get("/tasks", getTasks);
//add new task
router.post("/tasks", getTasks);
//update a task
router.put("/tasks", getTasks);
//delete a task
router.delete("/tasks", getTasks);
//get one especific task
router.get("/tasks", getTasks);

module.exports = router;
