//declare all the Sql queries
const sqlQueries = {
  getAllTasks: "SELECT * FROM Task",
  addNewTask:
    "INSERT INTO Task (name_task, status_task,id_task_folder) VALUES (@name_task, @status_task, @id_task_folder)",
  getTaskById: "SELECT * FROM Task where id_task = @id",
  deleteTask: "DELETE FROM Task where id_task = @id",
  updateTaskById: "UPDATE Task SET name_task = @name_task, status_task = @status_task WHERE id_task = @id",
  getAllFolders: "SELECT * FROM Folder",
  addNewFolder:
  "INSERT INTO Folder (name_folder) VALUES (@name_folder)",
  getFolderById: "SELECT * FROM Folder where id_folder = @id",
};

module.exports = {
  sqlQueries,
};
