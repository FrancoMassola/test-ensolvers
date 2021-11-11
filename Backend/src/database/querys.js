//declare all the Sql querys
const sqlQuerys = {
  getAllTasks: "SELECT * FROM Task",
  addNewTask:
    "INSERT INTO Task (name_task, status_task,id_task_folder) VALUES (@name_task, @status_task, @id_task_folder)",
};

module.exports = {
  sqlQuerys,
};
